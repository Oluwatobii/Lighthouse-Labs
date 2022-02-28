const findKeyByValue = function (theObj, theValue) {
  // Whay do i want to do?
  // I want to take in an object and a value.
  // It should scan the object and return the first key which contains the given value.
  // If no key with that given value is found, then it should return undefined.

  // How i want my answer to be like
  result = "";
  // First print out the array of keys
  let theKeyArray = Object.keys(theObj);
  console.log(theKeyArray);
  // Run a for OF loop to check it out individually and compare it to the given value
  for (key of theKeyArray) {
    //key in this case is also known as theKeyArray[i]
    if (theObj[key] === theValue) {
      result = key;
    } else {
      result = undefined;
    }
  }
  return result;
};

module.exports = findKeyByValue;

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual}  !== ${expected}`);
//   }
// };

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
