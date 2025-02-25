import { gcd, makeNewArray } from "@/sample";

describe("sample", () => {
  test("should return 17 for index 0 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[0]).toBe(3);
  });

  test("should return 17 for index 1 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[1]).toBe(5);
  });

  test("should return 17 for index 2 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[2]).toBe(6);
  });

  test("should return 17 for index 3 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[3]).toBe(12);
  });

  test("should return 17 for index 4 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[4]).toBe(17);
  });

  test("should return 17 for index 5 when passing [3, 2, 1, 6, 5, 4]", () => {
    expect(makeNewArray([3, 2, 1, 6, 5, 4])[5]).toBe(21);
  });

  test("should return 12 when passing 36 and 60", () => {
    expect(gcd(36, 60)).toBe(12);
  });

  test("should return 12 when passing 60 and 12", () => {
    expect(gcd(60, 36)).toBe(12);
  });

  test("should return 60 when passing 60 and 60", () => {
    expect(gcd(60, 60)).toBe(60);
  });
});
