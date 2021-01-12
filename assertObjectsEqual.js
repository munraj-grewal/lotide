const { builtinModules } = require('module');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqObjects(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(array1)} === ${inspect(array2)}`);
  }
};

module.exports = assertObjectsEqual;