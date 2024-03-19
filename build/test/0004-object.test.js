import { object } from "../src/object";
describe("Object Test", () => {
    it("Object", () => {
        expect(object).toHaveProperty("name");
        expect(object).toHaveProperty("age");
        expect(object.name).toEqual("John Doe");
        expect(object.age).toEqual(10);
    });
});
