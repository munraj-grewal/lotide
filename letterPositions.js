const letterPositions = function(sentence) {
  sentence = sentence.split(" ").join("");
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

module.exports = letterPositions;