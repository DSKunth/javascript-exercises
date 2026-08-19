"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false - actual result: false
console.log(3 == "3"); // prediction: true - actual result: true
console.log("5" - 1); // prediction: 4 - actual result: 4
console.log("5" + 1); // prediction: 51 - actual result: 51
console.log(1 + true); // prediction: 2 - actual result: 2
console.log(10 >= 10); // prediction: true - actual result: true
console.log(!(5 > 2)); // prediction: false - actual result: false
console.log(4 !== "4"); // prediction: true - actual result: true
console.log("b" > "a"); // prediction: true - actual result: true
console.log(0 === -0); // prediction: true - actual result: true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

const number = 30;

if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Run 1: number = 30, the output is "The number is even"
// Run 2: number = 13, the output is "The number is odd"

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

const orderSize = 2;

if (orderSize > 12) {
  console.log("You get 10% discount");
} else if (orderSize > 6) {
  console.log("You get 5% discount");
} else {
  console.log(`You need ${7 - orderSize} more items to get a discount`);
}

// Run 1: orderSize = 7, output is "You get 5% discount"
// Run 2: orderSize = 15, output is "You get 10% discount"
// Rub 3: orderSize = 2, output is "You need 5 more items to get a discount"

// In an if...else if chain, order matters because JavaScript stops at the first condition that evaluates to true.
// The most specific condition should be checked first.
// In this example, an order size of 15 is both greater than 12 and greater than 6, but only the first matching block runs.
// If the check for > 6 came first, // orders greater than 12 would never reach the 10% discount block.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

console.log(Boolean(false)); // prediction: false
console.log(Boolean(0)); // prediction: false
console.log(Boolean("0")); // prediction: true
console.log(Boolean("")); // prediction: false
console.log(Boolean(" ")); // prediction: true
console.log(Boolean("bread")); // prediction: true
console.log(Boolean(null)); // prediction: false
console.log(Boolean(undefined)); // prediction: false

// Falsy values: false, 0, "", null, undefined
// Truthy values: "0", " ", "bread"

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
const day = "Wednesday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}

switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
}

// Test 1: day = "Sunday"
// Output: Open 8:00 to 12:00

// Test 2: day = "Monday"
// Output: Closed today

// Test 3: day = "Wednesday"
// Output: Open 7:00 to 18:00

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
// if ((shopStatus = "open")) {
//  console.log("Welcome in");
// }

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// * Repaired version
if (shopStatus === "open") {
  console.log("Welcome in");
}

// Incorrect behavior:
// shopStatus = "closed"
// Output: Welcome in
// Reason: The assignment operator (=) assigned "open" to shopStatus
// The non-empty string "open" is truthy, so the if clock always run
// Repair: Replaced the assignment operator (=) with the strict equality operator (===).

switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// Incorrect behavior:
// size = "M"
// Output:
// Medium
// Large
// Reason: Missing break caused the switch to fall through
// Repair: Added break after each case to prevent execution from falling through into the next case's lines

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

const year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("normal year");
}

// Test 1: year = 2024
// Output: leap year
// Test 2: year = 1900
// Output: normal year
// Test 3: year = 2000
// Output: leap year

const numVariable = 1;

if (numVariable % 3 === 0 && numVariable % 5 === 0) {
  console.log("FizzBuzz");
} else if (numVariable % 3 === 0) {
  console.log("Fizz");
} else if (numVariable % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(numVariable);
}

// Test 1: numVariable = 27
// Output: Fizz
// Test 2: numVariable = 25
// Output: Buzz
// Test 3: numVariable = 15
// Output: FizzBuzz
// Test 4: numVariable = 1
// Output: 1

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
