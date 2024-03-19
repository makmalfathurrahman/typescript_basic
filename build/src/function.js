// Function
export const sayHello = () => {
    return `Hello World!`;
};
// Function Void
export const sayHelloVoid = () => {
    console.log("Hello World!");
};
// Function Parameter
export const sumNumber = (num1, num2) => {
    return `Result: ${num1 + num2}`;
};
// Function Default Parameter
export const sayHelloDefault = (name = "World") => {
    return `Hello ${name}!`;
};
// Function Variable Arguments
export const numberArgs = (...value) => {
    return value;
};
// Function Optional Parameter
export const sayHelloOptional = (name) => {
    if (name !== undefined) {
        return `Hello ${name}!`;
    }
    else {
        return "Hello!";
    }
};
// Function as Parameter
export const sayHelloFilter = (name, filter) => {
    return `Hello ${filter(name)}!`;
};
export const toUpper = (name) => {
    return name.toUpperCase();
};
