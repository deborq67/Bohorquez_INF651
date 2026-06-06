// 1. Variables and Data Types

const personName = "David";
const age = 20;
const studentStatus = true;

console.log("Name:", personName);
console.log("Age:", age);
console.log("Is this Person a Student?:", studentStatus);

// 2. Basic Arithmetic Operations

let x = 10;
let y = 5;

console.log(`\nNumber 1 is ${x} and Number 2 is ${y}.`);
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

// 3. Working with Strings

const sentence = "This is a sentence.";


console.log(`\n${sentence}`)
console.log("Sentence Length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.slice(-1));

// 4. Math Object

const numberNegative = -9;

console.log(`\nSquare root of ${numberNegative}:`, Math.sqrt(numberNegative));
console.log(`${numberNegative} squared:`, Math.pow(numberNegative, 2));
console.log(`Absolute value of ${numberNegative}:`, Math.abs(numberNegative));

// 5. Boolean Logic and Comparison Operators

x = 45;
y = 36;

console.log(`\nIs ${x} greater than ${y}?: ${x > y}`)
console.log(`Is ${x} less than ${y}?: ${x < y}`)
console.log(`Is ${x} equal to ${y}?: ${x == y}`)

// 6. Logical Operators

const trueVariable = true;
const falseVariable = false;

console.log("\ntrue:", trueVariable)
console.log("false:", falseVariable)


console.log("Not true:", !trueVariable);
console.log("Not false:", !falseVariable);
console.log("true AND false:", trueVariable && falseVariable);
console.log("true AND true:", trueVariable && trueVariable);
console.log("false AND false:", falseVariable && falseVariable);
console.log("true OR false:", trueVariable || falseVariable);
console.log("true OR true:", trueVariable || trueVariable);
console.log("false OR false:", falseVariable || falseVariable);


// 7. Using Template Literals

const firstName = "David";
const lastName = "Borquest";

console.log(`\nWelcome to the console, ${firstName} ${lastName}!`);