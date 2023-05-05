import { undefineNull } from "../lib";

describe("undefineNull", () => {
  test("should replace null with undefined in an object", () => {
    const obj = {
      a: null,
      b: {
        c: null,
        d: [1, null, 2],
        e: {
          f: null,
          g: null,
        },
      },
      h: [null, 3, null],
    };
    const expected = {
      a: undefined,
      b: {
        c: undefined,
        d: [1, undefined, 2],
        e: {
          f: undefined,
          g: undefined,
        },
      },
      h: [undefined, 3, undefined],
    };
    expect(undefineNull(obj)).toEqual(expected);
  });
  test("should return the same value for a non-object value", () => {
    expect(undefineNull(123)).toBe(123);
    expect(undefineNull("abc")).toBe("abc");
    expect(undefineNull(true)).toBe(true);
    expect(undefineNull(null)).toBe(null);
  });
});
