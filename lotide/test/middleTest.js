// TEST CODE..

const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// Test Cases..
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"]); // => should PASS
assertArraysEqual(middle(["1", "2", "3"]), ["2"]); // => should PASS
assertArraysEqual(middle(["1", "y", "3"]), ["y"]); // => should PASS
assertArraysEqual(middle(["1", "2", "3", 7, "10", "7"]), ["3", 7]); // => should PASS
