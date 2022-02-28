// TEST CODE..

const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Test Cases..

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS
assertEqual(eqArrays([3, 2, 3], [1, 2, 4]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "b", "s"], ["1", "b", "B"]), false); // => should PASS
assertEqual(eqArrays(["1", 2, 3], [1, "2", 4]), false); // => should PASS
assertEqual(eqArrays(["1", 2, 3], [1, 2, 4]), true); // => should FAIL
assertEqual(eqArrays(["2", "3"], ["2", "3"]), true); // => should FAIL
