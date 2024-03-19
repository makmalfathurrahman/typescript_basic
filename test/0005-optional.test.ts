import { Category, Product } from "../src/type";
import { object } from "../src/object";

describe("Optional Properties Test", () => {
  it("Optional Properties in Type Alias", () => {
    const category: Category = {
      id: "CAT001",
      name: "Electonic",
    };

    const product: Product = {
      id: "PRO001",
      name: "Laptop",
      price: 1000,
      category: category,
    };

    expect(category).toHaveProperty("id");
    expect(category).toHaveProperty("name");
    expect(category.id).toEqual("CAT001");
    expect(category.name).toEqual("Electonic");

    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("category");
    expect(product.id).toEqual("PRO001");
    expect(product.name).toEqual("Laptop");
    expect(product.price).toEqual(1000);
    expect(product.category).toEqual(category);
  });

  it("Optional Properties in Object", () => {
    expect(object).toHaveProperty("name");
    expect(object).toHaveProperty("age");
    expect(object.name).toEqual("John Doe");
    expect(object.age).toEqual(10);
  });
});
