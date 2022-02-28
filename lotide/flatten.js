const flatten = function (arr) {
  //Create whre the result will be --> array
  let flattenedArray = [];
  //Create a helper function so the array doesnt reset
  const helper = function (arr) {
    //write a for loop
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      //if the element is an array, recurse with the helper function
      if (Array.isArray(elem)) {
        helper(elem);
      } else {
        flattenedArray.push(elem);
      }
      //else, push element into bland arrray
    }
  };
  //call helper function
  helper(arr);

  //return the array
  return flattenedArray;
};

module.exports = flatten;

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅Assertion Passed: ${arr1}  === ${arr2}`);
//   } else {
//     console.log(`🔴Assertion Failed: ${arr1}  !== ${arr2}`);
//   }
// };

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

//console.log(flatten([1, 2, [3, 4], "Jane", 5, [6]]));
