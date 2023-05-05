import { removeNull } from "../lib";

describe("removeNull", () => {
  test("should remove null values from an object", () => {
    const obj = {
      a: 1,
      b: null,
      c: {
        d: null,
        e: [2, null, { f: null }],
      },
      g: [3, null, 4],
    };
    const expected = {
      a: 1,
      c: {
        e: [2, {}],
      },
      g: [3, 4],
    };
    expect(removeNull(obj)).toEqual(expected);
  });
  test("should remove null values from an array", () => {
    const arr = [
      1,
      null,
      {
        a: null,
        b: [2, null, { c: null }],
      },
      [3, null, 4],
    ];
    const expected = [
      1,
      {
        b: [2, {}],
      },
      [3, 4],
    ];
    expect(removeNull(arr)).toEqual(expected);
  });
  test("should return the same value for a non-object value", () => {
    expect(removeNull(123)).toBe(123);
    expect(removeNull("abc")).toBe("abc");
    expect(removeNull(true)).toBe(true);
    expect(removeNull(undefined)).toBe(undefined);
  });
});
