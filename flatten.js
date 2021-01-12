const flatten = function(array) {
  let flattened = [];
  for (let values of array) {
    if (Array.isArray(values)) {
      for (let value of values) {
        flattened.push(value);
      }
    } else {
      flattened.push(values);
    }
  }
  return flattened;
};

module.exports = flatten;