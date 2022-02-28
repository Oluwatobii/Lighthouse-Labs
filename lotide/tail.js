// FUNCTION IMPLEMENTATION

const tail = function (array) {
  if (array.length > 1) {
    return array.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;
