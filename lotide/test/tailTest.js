// TEST CODE

const assert = require("chai").assert;
const tail = require("../tail");

describe("#head", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [Lighthouse']", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
});
