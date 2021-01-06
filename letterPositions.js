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

const letterPositions = function(sentence) {
  sentence = sentence.split(" ").join("");
  const results = {};
  for(let x = 0; x < sentence.length; x++){
    if (results[sentence[x]]){
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);