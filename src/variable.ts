export const stringVar: string = "Hello World!";
export const numberVar: number = 42;
export const booleanVar: boolean = true;

export const arrayVarString: String[] = ["one", "two", "three"];
export const arrayVarNumber: Array<Number> = [1, 2, 3, 4, 5];

export const tuppleVar: readonly [String, Number, String] = ["one", 1, "ONE"];

export function union(unionVar: string | number | boolean) {
  if (typeof unionVar === "string") {
    return `Hello ${unionVar}!`;
  } else if (typeof unionVar === "number") {
    return unionVar * unionVar;
  } else {
    return !unionVar;
  }
}
