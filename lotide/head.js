// FUNCTION IMPLEMENTATION
const head = function (array) {
  if (array.length >= 1) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
