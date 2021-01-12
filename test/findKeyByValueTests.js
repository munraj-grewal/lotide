const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#countOnly", () => {
  it(`returns ${findKeyByValue(bestTVShowsByGenre, "The Wire")} for findKeyByValue(bestTVShowsByGenre, "The Wire")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`returns ${findKeyByValue(bestTVShowsByGenre, "That '70s Show")} for findKeyByValue(bestTVShowsByGenre, "That '70s Show")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});