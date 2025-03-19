import { createInterface } from "node:readline/promises";

import {
  CreateBucketCommand,
  DeleteBucketCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
  paginateListObjectsV2,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

export async function main() {
  const s3Client = new S3Client({});

  const bucketName = `test-bucket-${Date.now()}`;
  await s3Client.send(
    new CreateBucketCommand({
      Bucket: bucketName,
    }),
  );
  console.log(`Bucket created: ${bucketName}`);

  const files = [
    { key: "presigned-file1.txt", content: "Content for file 1" },
    { key: "presigned-file2.txt", content: "Content for file 2" },
    { key: "presigned-file3.txt", content: "Content for file 3" },
  ];

  const urlPromises = files.map((file) => {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: file.key,
    });

    return getSignedUrl(s3Client, command, { expiresIn: 3600 });
  });
  const presignedUrls = await Promise.all(urlPromises);
  console.log("Presigned URLs generated:", presignedUrls);

  // 故意に2番目のURLを改ざんしてアップロード失敗を発生させる
  // 署名部分（"Signature="）を不正なものに変更
  presignedUrls[1] = presignedUrls[1].replace("Signature=", "Signature=invalid");

  const uploadPromises = presignedUrls.map((url, index) => {
    return axios.put(url, files[index].content);
  });

  const uploadResults = await Promise.allSettled(uploadPromises);
  uploadResults.forEach((result, index) => {
    if (result.status !== "fulfilled") {
      const { message, response } = result.reason;
      const status = response ? response.status : "No status";
      console.error(`Upload failed for ${files[index].key}: status ${status}, message: ${message}`);
    }
  });

  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: bucketName,
      Key: files[0].key,
    }),
  );
  console.log(`Content of ${files[0].key}:`, await Body?.transformToString());

  const prompt = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const result = await prompt.question("Empty and delete bucket? (y/n) ");
  prompt.close();

  if (result === "y") {
    const paginator = paginateListObjectsV2({ client: s3Client }, { Bucket: bucketName });
    for await (const page of paginator) {
      const objects = page.Contents;
      if (objects) {
        for (const object of objects) {
          await s3Client.send(new DeleteObjectCommand({ Bucket: bucketName, Key: object.Key }));
        }
      }
    }

    await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));
    console.log("Bucket and objects deleted.");
  }
}

import { fileURLToPath } from "node:url";
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
