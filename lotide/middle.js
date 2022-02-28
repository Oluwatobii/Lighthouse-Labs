// FUNCTION IMPLEMENTATION
const middle = function (array) {
  if (array.length % 2 === 0) {
    return array.slice((array.length - 2) / 2, (array.length + 2) / 2);
  } else {
    return array.slice(array.length / 2, (array.length + 1) / 2);
  }
};

module.exports = middle;
