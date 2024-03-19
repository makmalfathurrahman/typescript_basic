describe("Intersection Test", () => {
    it("Intersection", () => {
        const person = {
            name: "John Doe",
            age: 20,
        };
        console.log(person);
        expect(person["name"]).toBe("John Doe");
        expect(person["age"]).toBe(20);
        expect(person).toHaveProperty("name");
        expect(person).toHaveProperty("age");
    });
});
export {};
