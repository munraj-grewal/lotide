const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      filteredArray.push(source[x]);
    }
  }
  return filteredArray;
};

module.exports = without;