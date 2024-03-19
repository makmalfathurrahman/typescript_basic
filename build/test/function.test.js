import { sayHello } from "../src/function";
describe("Function Test", () => {
    it("", () => {
        expect(sayHello("World")).toBe("Hello World!");
    });
});
