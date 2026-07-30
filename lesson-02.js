"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "DK BBQ Grill";
// const because the shop name does not change

let dailyCustomers = 150;
// let because the number of daily customers changes

const ownerName = "Dorothy Kunth";
// const because the owner stays the same

let porkStockKg = 80;
// let because the stock/inventory of pork meat in kg varies/changes

let numberEmployees = 22;
// let because the number of employees changes

console.log(shopName);
console.log(dailyCustomers);
console.log(ownerName);
console.log(porkStockKg);
console.log(numberEmployees);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName);
console.log(typeof dailyCustomers);
console.log(typeof ownerName);
console.log(typeof porkStockKg);
console.log(typeof numberEmployees);

let breadStock = null;
let nextDelivery;

console.log(typeof breadStock);
console.log(typeof nextDelivery);
// typeof null returns object, which is a famous historical bug in JavaScript.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let weekendSpecials;
let groupDiscount = null;

console.log(weekendSpecials);
console.log(typeof weekendSpecials);
console.log(groupDiscount);
console.log(typeof groupDiscount);

// Undefined means nothing was provided and null means intentionally set to empty

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

console.log(Number(priceText), typeof Number(priceText));
console.log(Number(countText), typeof Number(countText));
console.log(Boolean(flagText), typeof Boolean(flagText));

const tableNumber = 35;
console.log(String(tableNumber), typeof String(tableNumber));

// Number() will produce NaN when the text contains no sensible number

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakeryName = "Maison Sarah";
// TypeError: Assignment to constant variable - Repaired the error by removing the reassignment

let openingHour = 7;
// ReferenceError: openingHour is not defined - Repaired the error by declaring the openingHour with let

let loafCount = 12;
console.log(loafCount);
// ReferenceError: Cannot access 'loafCount' before initialization - Repaired the error by declaring loafCount before reading it.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 27;
let b = 19;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
