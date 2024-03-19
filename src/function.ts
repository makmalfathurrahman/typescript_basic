// Function
export const sayHello = (): string => {
  return `Hello World!`;
};

// Function Void
export const sayHelloVoid = (): void => {
  console.log("Hello World!");
};

// Function Parameter
export const sumNumber = (num1: number, num2: number): String => {
  return `Result: ${num1 + num2}`;
};

// Function Default Parameter
export const sayHelloDefault = (name: string = "World") => {
  return `Hello ${name}!`;
};

// Function Variable Arguments
export const numberArgs = (...value: string[]) => {
  return value;
};

// Function Optional Parameter
export const sayHelloOptional = (name?: string): string => {
  if (name !== undefined) {
    return `Hello ${name}!`;
  } else {
    return "Hello!";
  }
};

// Function as Parameter
export const sayHelloFilter = (name: string, filter: (name: string) => string) => {
  return `Hello ${filter(name)}!`;
};

export const toUpper = (name: string): string => {
  return name.toUpperCase();
};
