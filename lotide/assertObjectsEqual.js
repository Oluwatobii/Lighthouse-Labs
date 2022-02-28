const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line to fix th output issue
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;

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

// const eqObjects = function (object1, object2) {
//   // This function should return true if both objects match (Identical keys and values)
//   // Otherwise it should return a false
//   let objectOneKeyArray = Object.keys(object1);
//   let objectTwoKeyArray = Object.keys(object2);

//   // Now, compare the lengths
//   if (objectOneKeyArray.length !== objectTwoKeyArray.length) {
//     return false;
//   }

//   // Now, Loop through just one of the keys and compare it to the other.
//   for (key of objectOneKeyArray) {
//     // key in this case is objectOneKeyArray[i]
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// // FUNCTION IMPLEMENTATION TESTING
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false
