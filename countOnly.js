const countOnly = function(allItems, itemsToCount) {
  let newObject = {};
  for (let arrayItem of allItems) {
    if (newObject[arrayItem]) {
      newObject[arrayItem] += 1;
    } else if (itemsToCount[arrayItem]) {
      newObject[arrayItem] = 1;
    }
  }
  return newObject;
};

module.exports = countOnly;