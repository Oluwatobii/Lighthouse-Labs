const map = function (words, callback) {
  const results = [];
  for (let item of words) {
    results.push(callback(item));
  }
  return results;
};

const callback = function (item) {
  return item[0];
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// console.log(map(words, callback));

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
