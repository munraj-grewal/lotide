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

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      filteredArray.push(source[x]);
    }
  }
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// const without = function(source, itemsToRemove) {
//   let filteredArray = [];
//   for (let x = 0; x < source.length; x++) {
//     for (let y = 0; y < itemsToRemove.length; y++) {
//       let filterBool;
//       if (source[x] !== itemsToRemove[y]) {
//         filterBool = false;
//         if(y === itemsToRemove.length - 1 && filterBool === false){
//           filteredArray.push(source[x]);
//         }
//       }
//     }
//   }
//   return filteredArray;
// };