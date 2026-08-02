"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

console.log("Part One");
const menuItem = {
  name: "Pork Ribs",
  price: 18.5,
  vegetarian: false,
  category: "Main Course",
  subcategory: "Pork",
};

console.log(menuItem.name);
console.log(menuItem.price);

const field = "category";
console.log(menuItem[field]);

// Bracket notation is required because the key is stored as a variable.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

console.log("Part Two");
menuItem.describe = function () {
  return `Our ${this.name}, slow-smoked, tender meat with signature BBQ sauces costs ${this.price.toFixed(2)} €`;
};

console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

console.log("Part Three");
const menu = [
  { name: "Chicken Barbecue", price: 9.5, spicy: true, vegetarian: false },
  { name: "Grilled Vegetables", price: 7.5, spicy: false, vegetarian: true },
  { name: "Pork Chops", price: 15.5, spicy: false, vegetarian: false },
  { name: "Beef Ribs Barbecue", price: 22.5, spicy: true, vegetarian: false },
  { name: "Grilled Sausage", price: 8.5, spicy: false, vegetarian: false },
  { name: "Potato Salad", price: 5.5, spicy: false, vegetarian: true },
];

for (const menuItem of menu) {
  console.log(
    `${menuItem.name} is ${
      menuItem.vegetarian ? "vegetarian" : "non-vegetarian"
    } and ${menuItem.spicy ? "spicy" : "not spicy"}, costs ${menuItem.price.toFixed(2)} €`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

console.log("Part Four");
const vegetarian = menu
  .filter((menuItem) => menuItem.vegetarian)
  .map((menuItem) => menuItem.name);
console.log(vegetarian);

const cheap = menu.find((menuItem) => menuItem.price < 3);
console.log(cheap);

// find() returns undefined when no item matches

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

console.log("Part Five");
const pork = {
  name: "Pork Chops",
  price: 15.5,
  spicy: false,
  vegetarian: false,
};
console.log(Object.keys(pork));
console.log(Object.values(pork));

for (const [key, value] of Object.entries(pork)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

console.log("Part Six");

const originalMenu = { name: "Baby Back Ribs", price: 28.5 };
const copy = originalMenu;

copy.price = 30;
console.log(`The price of originalMenu: ${originalMenu.price}`);

const newMenu = { ...originalMenu, price: 29 };
console.log(
  `The price of originalMenu: ${originalMenu.price} and the price of newMenu: ${newMenu.price}`,
);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

console.log("Part Seven");
// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
console.log(words);
const counter = {};

for (const word of words) {
  if (counter[word]) {
    counter[word] += 1;
  } else {
    counter[word] = 1;
  }
}

console.log(counter);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
