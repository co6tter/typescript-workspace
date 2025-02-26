import { calc, gcd, makeNewArray, rev } from "@/sample";

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

  test("should return 12 when passing 60 and 36", () => {
    expect(gcd(60, 36)).toBe(12);
  });

  test("should return 60 when passing 60 and 60", () => {
    expect(gcd(60, 60)).toBe(60);
  });

  test("should return 2.8284271247461903 when passing 2 and 2", () => {
    expect(calc(2, 2)).toBe(2.8284271247461903);
  });

  test("should return 0b11010010 when passing 0b01001011", () => {
    expect(rev(0b01001011)).toBe(0b11010010);
  });
});
