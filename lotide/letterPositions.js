const letterPositions = function (str) {
  let result = {};
  //Run a for loop to check through the string
  for (let i in str) {
    //Since we want the index position of the characters in the string a for IN loop is preferable since it returns the index.
    //Since we are not counting the spaces, we can write out function to exclude it
    if (str[i] !== " ") {
      if (result[str[i]]) {
        //Push the value of the index to the result vaurable defined earlier. (convert it to an integer)
        result[str[i]].push(Number(i));
      } else {
        result[str[i]] = [Number(i)];
      }
    }
  }
  return result;
};

module.exports = letterPositions;

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅Assertion Passed: ${arr1}  === ${arr2}`);
//   } else {
//     console.log(`🔴Assertion Failed: ${arr1}  !== ${arr2}`);
//   }
// };

// console.log(letterPositions("Lighthouse is in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);
