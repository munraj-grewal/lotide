const map = function(array, callback) {
  const results = [];
  array.forEach(element => {
    results.push(callback(element));
  });
  return results;
};

module.exports = map;