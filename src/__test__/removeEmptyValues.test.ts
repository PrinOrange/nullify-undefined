import { removeEmptyValues } from "../lib";

describe("removeEmptyValues", () => {
  test("should remove null and undefined values from an object", () => {
    const obj = {
      a: 1,
      b: null,
      c: {
        d: undefined,
        e: [2, null, { f: undefined }],
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
    expect(removeEmptyValues(obj)).toEqual(expected);
  });
  test("should remove null and undefined values from an array", () => {
    const arr = [
      1,
      null,
      {
        a: undefined,
        b: [2, null, { c: undefined }],
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
    expect(removeEmptyValues(arr)).toEqual(expected);
  });
  test("should return the same value for a non-object value", () => {
    expect(removeEmptyValues(123)).toBe(123);
    expect(removeEmptyValues("abc")).toBe("abc");
    expect(removeEmptyValues(true)).toBe(true);
    expect(removeEmptyValues(undefined)).toBe(undefined);
  });
});
