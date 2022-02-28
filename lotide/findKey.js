const findKey = function (theObj, callback) {
  // Whay do i want to do?
  // I want to take in an object and a value.
  // It should scan the object and return the first key which contains the given value.
  // If no key with that given value is found, then it should return undefined.

  // How i want my answer to be like
  result = "";
  // First print out the array of keys
  let theKeyArray = Object.keys(theObj);
  //console.log(theKeyArray);
  // Run a for OF loop to check it out individually and compare it to the given value
  for (key of theKeyArray) {
    //key in this case is also known as theKeyArray[i]
    if (callback(theObj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual}  !== ${expected}`);
//   }
// };

// console.log(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   )
// ); // => "noma"

// assertEqual("noma", findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)) // => Passed!

// console.log(
//   findKey(
//     {
//       ben: { age: 10, eyes: "blue" },
//       john: { age: 15, eyes: "brown" },
//       karl: { age: 16, eyes: "blue" },
//     },
//     (x) => x.age > 15
//   )
// );

// console.log(
//   findKey(
//     {
//       horse: "mammal",
//       shark: "fish",
//       eagle: "bird",
//       mouse: "mammal",
//     },
//     (x) => x === "fish"
//   )
// );
