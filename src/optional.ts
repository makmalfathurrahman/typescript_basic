// Type
export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: Category;
};

// Object
export const object: { name: string; age: number; address?: string } = {
  name: "John Doe",
  age: 10,
};
