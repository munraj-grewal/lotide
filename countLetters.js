const countLetters = function(sentence) {
  sentence = sentence.split(" ").join("");
  console.log(sentence);
  let letterCount = {};
  for (let letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;