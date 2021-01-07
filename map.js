const map = function(array, callback) {
  const results = [];
  array.forEach(element => {
    results.push(callback(element));
  });
  return results;
}

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


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);