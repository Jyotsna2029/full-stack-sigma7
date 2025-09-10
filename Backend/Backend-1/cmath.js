const someVal = require("./cExport"); // use relative path
console.log(someVal);

// Example usage
console.log("Sum:", someVal.sum(8, 17)); // 26
console.log("Mul:", someVal.mul(8, 1)); // 8
console.log("g:", someVal.g);           // 9.8
console.log("Pi:", someVal.Pi);         // 3.14
