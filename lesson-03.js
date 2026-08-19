"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "DK BBQ Grill";
const openingHour = 10;
const closingHour = 22;

console.log(
  `Welcome to ${shopName}! We\'re open from ${openingHour}:00 until ${closingHour}:00.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

const cleaned = messy
  .trim()
  .replace("  ", "")
  .toUpperCase()
  .replace("DAILY", "EVERYDAY");

console.log(cleaned);

// .trim() to remove leading and trailing white space
// .replace() to remove the two spaces in between Maison and Sarah and to change the word "DAILY" to "EVERYDAY",
// .toUpperCase() to convert everything to upper case.

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length);
console.log(product.indexOf("Loaf"));
console.log(product.slice(10, 14));

console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
console.log(`Final Price: €${finalPrice.toFixed(2)}`);

// .toFixed() returns a string, that's why formatting has to be done the last after doing all the computation/calculation.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

console.log(Math.floor(Math.random() * 6) + 1);

console.log(Math.floor(Math.random() * 11) + 10);
// Math.random() * 11 will produce range >= 0 and < 11
// Wrapping it in Math.floor() will produce range 0 to 10
// adding +10 will have a range of 10 to 20

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

const iban = "36985214798745632152";
const last4Digits = iban.slice(-4);
console.log(`Your IBAN is DE ${last4Digits.padStart(iban.length, "*")}`);

// .padStart(targetLength, padString) method fills the beginning of the string with a chosen character until the string reaches the target length

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "Dorothy";
const lastName = "Kunth";
const userName = firstName.slice(0, 1).toLowerCase() + lastName.toLowerCase();

console.log(userName);

const adjective = "sunny";
const noun = "baby back ribs";
const verb = "danced";
const place = "garden";

console.log(
  `The weather is ${adjective}, so we have decided to have a grill party in our ${place}. Everyone ${verb} while enjoying a platter of ${noun}!`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
