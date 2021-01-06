const eqArrays = function(array1, array2) {
  let returnBool;

  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        returnBool = true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return returnBool;
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]