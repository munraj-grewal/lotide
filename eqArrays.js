const eqArrays = function(array1, array2) {
  let returnBool;
  if (array1.length === array2.length) {
    returnBool = true;
    for (let x = 0; x < array1.length; x++) {
      if (Array.isArray(array1[x]) && Array.isArray(array2[x])) {
        returnBool = eqArrays(array1[x], array2[x]);
      } else {
        if (array1[x] === array2[x]) {
          returnBool = true;
        } else {
          returnBool = false;
        }
      }
    }
  } else {
    returnBool = false;
  }
  return returnBool;
};

module.exports = eqArrays;