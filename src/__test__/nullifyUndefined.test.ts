import { nullifyUndefined } from "../lib";

describe("nullifyUndefined", () => {
  test("should replace undefined with null in an object", () => {
    const obj = {
      a: 1,
      b: undefined,
      c: {
        d: undefined,
        e: [2, undefined, { f: undefined }],
      },
      g: [3, undefined, 4],
    };
    const expected = {
      a: 1,
      b: null,
      c: {
        d: null,
        e: [2, null, { f: null }],
      },
      g: [3, null, 4],
    };
    expect(nullifyUndefined(obj)).toEqual(expected);
  });
  test("should return null for an undefined value", () => {
    expect(nullifyUndefined(undefined)).toBeNull();
  });
  test("should return the same value for a non-object and non-undefined value", () => {
    expect(nullifyUndefined(123)).toBe(123);
    expect(nullifyUndefined("abc")).toBe("abc");
    expect(nullifyUndefined(true)).toBe(true);
    expect(nullifyUndefined(null)).toBe(null);
  });
});
