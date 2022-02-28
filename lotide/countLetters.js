// Create a function that will return the amount of times a character appears in a string
const countChar = function (char, str) {
  // Result should give a single value (in this case a number)
  let result;
  let count = 0;
  strAray = str.split("");
  for (alphabet of str) {
    //alphabet in this case is also known as str[i]
    if (char === alphabet) {
      count = count + 1;
      result = count;
    }
  }
  return result;
};

const countLetters = function (words) {
  //define how i want my answer to be
  let result = {};
  // What do i want to do?
  // Implement my countChar function to help me count the amount of times a particular character occurs in a string
  // Loop through the words
  for (char of words) {
    // char in this case is also known as words[i]
    // Since i am not going to account for the space between the words, i can exempt it from my solution
    if (char !== " ") {
      // Now, i want to count the remaining characters in my words using my countChar function
      let count = countChar(char, words);
      result[char] = count;
    }
  }
  return result;
};

module.exports = countLetters;

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual}  !== ${expected}`);
//   }
// };
