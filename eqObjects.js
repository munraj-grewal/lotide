const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      if (!object2Keys.includes(key)) {
        return false;
      }
    }
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        return eqObjects(object1[key], object2[key]);
      }
      if (object1[key].length !== object2[key].length || object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;