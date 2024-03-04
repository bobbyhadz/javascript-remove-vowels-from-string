// EXAMPLE 1 - Remove the Vowels from a String in JavaScript

const str = 'bobbyhadz.com';

const noVowels = str.replace(/[aeiou]/gi, '');

console.log(noVowels); // 👉️ bbbyhdz.cm

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// const result1 = removeVowels('bobbyhadz.com');
// console.log(result1); // 👉️ bbbyhdz.cm

// const result2 = removeVowels('abcde');
// console.log(result2); // 👉️ bcd
