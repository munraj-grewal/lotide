const takeUntil = function(array, callback) {
  let returnArray = [];
  for (let element of array) {
    if (callback(element)) {
      return returnArray;
    } else {
      returnArray.push(element);
    }
  }
  return returnArray;
};


module.exports = takeUntil;