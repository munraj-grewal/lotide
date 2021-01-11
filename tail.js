const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = [];
  for (let x = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
};

module.exports = tail;