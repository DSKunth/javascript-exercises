"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.

console.log("Part One");

class Artist {
  constructor(artistName, musicGenre, totalRuntime) {
    this.name = artistName;
    this.genre = musicGenre;
    this.total = totalRuntime;
  }

  describe() {
    return `Dive into ${this.total} of high-energy beats with the ${this.genre} release from ${this.name}, out now on Spotify!`;
  }

  static named(instances, name) {
    return instances.find((artist) => artist.name === name);
  }
}

const rivermaya = new Artist("River Maya", "Pop Rock", "18:30");
const eraserheads = new Artist("Eraserheads", "Alternative Pop", "15:45");

console.log(rivermaya.describe());
console.log(eraserheads.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

console.log("Part Two");

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];
for (const artist of artistData) {
  const instance = new Artist(artist.name, artist.genre, artist.total);
  artists.push(instance);
}

for (const artist of artists) {
  // this is an Artist instance
  console.log(artist.describe());
}

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

console.log("Part Three");

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");
// Prediction: Without new, it will throw a TypeError
// Result: TypeError: Class constructor Artist cannot be invoked without 'new'

// ! Snippet two, an arrow function used as a method that reads this:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};
console.log(single.describe());
// Prediction: It will throw an error, this is not defined
// Result: undefined by undefined

// * Snippet three, the correct call. Uncomment after part one:
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());
// Prediction: This will print the sentence in the instance method describe
// Result: Dive into 14:08 of high-energy beats with the Afrobeats release from Asake, out now on Spotify!

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

console.log("Part Four");

class FeaturedArtist extends Artist {
  constructor(artistName, musicGenre, totalRuntime, blurb) {
    super(artistName, musicGenre, totalRuntime);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Featured: ${this.blurb}`;
  }
}

const featured = new FeaturedArtist(
  "Eraserheads",
  "Alternative Pop",
  "20:10",
  "Striking the perfect balance between raw garage rock and infectious pop melodies, The Eraserheads crafted the timeless soundtrack of 1990s Philippine youth culture.",
);

console.log(featured.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:

console.log("Part Five");
// This is equivalent to a class constructor
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}

// This is equivalent to an instance method in a class
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};

// This is equivalent to an instance method in a class
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

// To confirm the behavior matches with Artist class
const oldArtist = new ArtistOld("Ejae", "Korean Pop");

console.log(oldArtist.describe());
console.log(oldArtist.tag());

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

console.log("Part Six");

const found = Artist.named(artists, "Johnny Cash");

console.log(found.describe());

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
