const findKey = function(array, callback) {
  let returnValue = undefined;
  for (let element in array) {
    if (callback(array[element])) {
      returnValue = element;
      break;
    }
  }
  return returnValue;
};

module.exports = findKey;