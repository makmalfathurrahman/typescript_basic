export enum Category {
  ELECTRONIC = "ELECTRONIC",
  FINANCIAL = "FINANCIAL",
  FOOD = "FOOD",
  SHELTER = "SHELTER",
}

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
};
