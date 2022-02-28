// TEST CODE..

const assertArraysEqual = require("../assertArraysEqual");

// Test Cases..
assertArraysEqual(["1", "2", "3"], ["1", "2"]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "y", "3"], ["1", "y", "3"]); // => should PASS
assertArraysEqual(["1", "y", "3"], ["1", "2", "3"]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2"]); // => should FAIL
