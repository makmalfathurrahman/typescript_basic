import { stringVar, numberVar, booleanVar } from "../src/variable";
describe("Variable Test", () => {
    it("", () => {
        expect(typeof stringVar).toBe("string");
        expect(typeof numberVar).toBe("number");
        expect(typeof booleanVar).toBe("boolean");
    });
});
