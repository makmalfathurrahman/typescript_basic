export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface Sum {
  (num1: number, num2: number): string;
}

export interface NumberArray {
  [index: number]: string;
}

export interface NumberObject {
  [index: string]: string;
}

interface Vehicle {
  brand: string;
  year: number;
  type: string;
  start(): string;
}

export interface Car extends Vehicle {
  wheels: number;
}
