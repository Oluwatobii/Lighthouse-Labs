const { assert } = require("chai");

const { findTheUserByEmail } = require("../helpers.js");

const testUsers = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
};

describe("findTheUserByEmail", function() {
  it("should return a user with valid email", function() {
    const user = findTheUserByEmail("user@example.com", testUsers);
    const expectedOutput = "userRandomID";
    // Write your assert statement here
    assert.equal(user, testUsers[expectedOutput]);
  });

  it("should return undefined with an invalid email", function() {
    const user = findTheUserByEmail("nonuser@test.com", testUsers);
    console.log("HEre", user);
    const expectedOutput = false;
    // Write your assert statement here
    assert.equal(user, expectedOutput);
  });
});
