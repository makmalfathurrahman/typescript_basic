describe("Interface Test", () => {
    it("Interface", () => {
        const product = {
            id: "PRO001",
            name: "Laptop",
            price: 1000,
        };
        console.log(product);
        expect(product).toHaveProperty("id");
        expect(product).toHaveProperty("name");
        expect(product).toHaveProperty("price");
        expect(product.id).toEqual("PRO001");
        expect(product.name).toEqual("Laptop");
        expect(product.price).toEqual(1000);
    });
    it("Interface Function", () => {
        const sumOperation = (num1, num2) => {
            return `Result: ${num1 + num2}`;
        };
        console.log(sumOperation(1, 2));
        expect(sumOperation(1, 2)).toBe(`Result: ${3}`);
    });
    it("Interface Indexable Array", () => {
        const numberList = ["one", "two", "three"];
        console.log(numberList);
        expect(numberList[0]).toBe("one");
        expect(numberList[1]).toBe("two");
        expect(numberList[2]).toBe("three");
        expect(numberList).toContain("one");
    });
    it("Interface Indexable Object", () => {
        const numberList = {
            one: "A",
            two: "B",
            three: "C",
        };
        console.log(numberList);
        expect(numberList["one"]).toBe("A");
        expect(numberList["two"]).toBe("B");
        expect(numberList["three"]).toBe("C");
        expect(numberList).toHaveProperty("one");
        expect(numberList).toHaveProperty("two");
        expect(numberList).toHaveProperty("three");
    });
    it("Interface Indexable Array", () => {
        const car = {
            brand: "Toyota",
            year: 2010,
            type: "Car",
            start: () => {
                return `Engine Start!`;
            },
            wheels: 4,
        };
        console.log(car);
        console.log(car.start());
        expect(car["brand"]).toBe("Toyota");
        expect(car["year"]).toBe(2010);
        expect(car["type"]).toBe("Car");
        expect(car["wheels"]).toBe(4);
        expect(car).toHaveProperty("brand");
        expect(car).toHaveProperty("year");
        expect(car).toHaveProperty("type");
        expect(car).toHaveProperty("start");
        expect(car).toHaveProperty("wheels");
    });
});
export {};
