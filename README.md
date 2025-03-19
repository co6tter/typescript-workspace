# typescript-workspace

## Tech Stack

- TypeScript
- Vitest
- Biome
- Lefthook

## Note

- sample

```bash
ts-node-esm src/index.ts
ts-node --esm src/index.ts
```
上記で実行すると `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"` になった。

下記で一応実行はできた。

```bash
node --loader ts-node/esm src/aws-sdk-sample.ts
```