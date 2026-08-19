"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
console.log("Part One");

const menu = [
  "pork ribs",
  "lamb chops",
  "beef barbecue",
  "grilled sausage",
  "chicken barbecue",
];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
console.log("Part Two");

menu.push("shrimp skewers"); // push() adds item at the end
console.log(menu);

menu.unshift("grilled veggie skewers"); // unshift() adds item at the beginning
console.log(menu);

menu.pop(); // pop() removes item from the end
console.log(menu);

menu.shift(); // shift() removes item from the beginning
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
console.log("Part Three");
console.log("Using 'for' loop");
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log("Using 'for...of' loop");
for (const menuItem of menu) {
  console.log(menuItem);
}

// for loop is when you need the index, for...of loop is when you don't need the index and just want the values

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

console.log("Part Four");
// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

console.log("Using map()");
const discountedPrice = prices.map(
  (price) => `Discounted Price: ${price * (0.5).toFixed(2)} euros`,
);
console.log(discountedPrice);

console.log("Using filter()");
const lowCost = prices.filter((price) => price < 5);
console.log(lowCost);

console.log("Using find()");
const overTen = prices.find((price) => price > 10);
console.log(overTen);

// forEach() returns undefined and it does not create and return a new array of results like map(), filter(), and find().
// It is a well-known trap because forEach() throws away the callback's return values and expecting it to return a new array

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

console.log("Part Five");

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

artists.push("Ejae");

for (const artist of artists) {
  console.log(`=== ${artist} ===`);
  console.log(`The new album of ${artist} is now available on Spotify!`);
}

// I have added a new artist, Ejae to the array and I didn't have to change the loop.
// The loop automatically created a card for the new artist.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

console.log("Part Six");

console.log("This is assigning array");
const carte = menu;
carte.push("potato salad");

console.log(menu);
console.log(carte);

console.log("This creating spread copy");
const updatedMenu = [...menu];
updatedMenu.pop();

console.log(`Original length: ${menu.length}`);
console.log(`Copy length: ${updatedMenu.length}`);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

console.log("Part Seven");

console.log("Implementing FizzBuzz in full");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("Computing sum");

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(`The sum is: ${sum}`);

console.log("Finding the largest value");
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    // is the current number larger than the largest?
    largest = numbers[i]; // if yes, then change the value of largest into that number
  }
}

console.log(`The largest value is: ${largest}`);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

console.log("Part Eight");

console.log("Reversing a string with a loop");
const string = "Happiness";
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversed = reversed + string[i];
}
console.log(reversed);

console.log("Counting the vowels of a string");
const vowels = ["a", "e", "i", "o", "u"];
const stringArray = string.toLowerCase().split("");
console.log(stringArray);
let countVowels = 0;
for (let i = 0; i < stringArray.length; i++) {
  if (vowels.includes(stringArray[i])) {
    countVowels = countVowels + 1;
  }
}
console.log(`The number of vowels in the word ${string} is ${countVowels}`);

console.log("Building a palindrome checker");
function reverseString(word) {
  let reversedString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString = reversedString + word[i];
  }
  return reversedString;
}
console.log(reverseString("Happiness"));

function isPalindrome(word) {
  if (word.toLowerCase() === reverseString(word).toLowerCase()) {
    console.log(`The word ${word} is a palindrome`);
  } else {
    console.log(`The word ${word} is NOT a palindrome`);
  }
}

isPalindrome("level");
isPalindrome("Racecar");
isPalindrome("engage");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
