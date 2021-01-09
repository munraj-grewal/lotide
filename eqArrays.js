const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let returnBool;
  if (array1.length === array2.length) {
    returnBool = true;
    for (let x = 0; x < array1.length; x++) {
      if (Array.isArray(array1[x]) && Array.isArray(array2[x])) {
        returnBool = eqArrays(array1[x], array2[x]);
      } else{
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

assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false