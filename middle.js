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

const middle = function(array) {
  let newArray = [];

  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    //newArray.push(array[((array.length / 2) - 1)]);
    newArray.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return newArray;
  } else {
    newArray.push(array[Math.ceil(array.length / 2) - 1]);
    return newArray;
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);