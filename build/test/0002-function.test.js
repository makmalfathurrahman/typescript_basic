import { sayHello, sumNumber, sayHelloDefault, numberArgs, sayHelloOptional, sayHelloFilter, toUpper, } from "../src/function";
describe("Function Test", () => {
    it("Function", () => {
        expect(sayHello()).toBe("Hello World!");
    });
    it("Function Parameter", () => {
        expect(sumNumber(1, 2)).toBe(`Result: ${3}`);
    });
    it("Function Default Parameter", () => {
        expect(sayHelloDefault()).toBe("Hello World!");
        expect(sayHelloDefault("TypeScript")).toBe("Hello TypeScript!");
    });
    it("Function Variable Arguments", () => {
        const result = numberArgs("one", "two", "three");
        console.log(result);
        expect(result[0]).toBe("one");
        expect(result[1]).toBe("two");
        expect(result[2]).toBe("three");
    });
    it("Function Optional Parameter", () => {
        console.log(sayHelloOptional());
        expect(sayHelloOptional()).toBe("Hello!");
    });
    it("Function as Parameter", () => {
        const result = sayHelloFilter("World", toUpper);
        const resultCallback = sayHelloFilter("john", (name) => {
            return name.toUpperCase();
        });
        console.log(result);
        console.log(resultCallback);
        expect(result).toBe("Hello WORLD!");
        expect(resultCallback).toBe("Hello JOHN!");
    });
});
