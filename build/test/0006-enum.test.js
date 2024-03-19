import { Category } from "../src/enum";
describe("Enum Test", () => {
    it("Enum", () => {
        const product = {
            id: "PRO001",
            name: "Laptop",
            price: 1000,
            category: Category.ELECTRONIC,
        };
        console.log(product);
        expect(product).toHaveProperty("id");
        expect(product).toHaveProperty("name");
        expect(product).toHaveProperty("price");
        expect(product).toHaveProperty("category");
        expect(product.id).toEqual("PRO001");
        expect(product.name).toEqual("Laptop");
        expect(product.price).toEqual(1000);
        expect(product.category).toBe("ELECTRONIC");
    });
});
