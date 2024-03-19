export const stringVar = "Hello World!";
export const numberVar = 42;
export const booleanVar = true;
export const arrayVarString = ["one", "two", "three"];
export const arrayVarNumber = [1, 2, 3, 4, 5];
export const tuppleVar = ["one", 1, "ONE"];
export function union(unionVar) {
    if (typeof unionVar === "string") {
        return `Hello ${unionVar}!`;
    }
    else if (typeof unionVar === "number") {
        return unionVar * unionVar;
    }
    else {
        return !unionVar;
    }
}
