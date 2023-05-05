import { removeUndefined } from "../lib";
describe("removeUndefined", () => {
  test("should remove undefined values from an object", () => {
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
      c: {
        e: [2, {}],
      },
      g: [3, 4],
    };
    expect(removeUndefined(obj)).toEqual(expected);
  });
  test("should remove undefined values from an array", () => {
    const arr = [
      1,
      undefined,
      {
        a: undefined,
        b: [2, undefined, { c: undefined }],
      },
      [3, undefined, 4],
    ];
    const expected = [
      1,
      {
        b: [2, {}],
      },
      [3, 4],
    ];
    expect(removeUndefined(arr)).toEqual(expected);
  });
  test("should return the same value for a non-object value", () => {
    expect(removeUndefined(123)).toBe(123);
    expect(removeUndefined("abc")).toBe("abc");
    expect(removeUndefined(true)).toBe(true);
    expect(removeUndefined(null)).toBe(null);
  });
});
