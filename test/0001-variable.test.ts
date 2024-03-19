import {
  stringVar,
  numberVar,
  booleanVar,
  arrayVarString,
  arrayVarNumber,
  tuppleVar,
  union,
} from "../src/variable";

describe("Variable Test", () => {
  it("", () => {
    expect(typeof stringVar).toBe("string");
    expect(typeof numberVar).toBe("number");
    expect(typeof booleanVar).toBe("boolean");
  });

  it("Array Test", () => {
    expect(arrayVarString).toEqual(["one", "two", "three"]);
    expect(arrayVarNumber).toEqual([1, 2, 3, 4, 5]);
  });

  it("Tuple Test", () => {
    expect(tuppleVar).toEqual(["one", 1, "ONE"]);
  });

  it("Union Type Test", () => {
    expect(union("World")).toBe("Hello World!");
    expect(union(2)).toBe(4);
    expect(union(true)).toBe(false);
  });
});
