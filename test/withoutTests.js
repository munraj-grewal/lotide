const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

describe("#takeUntil", () => {
  it(`returns ${words} for ["hello", "world", "lighthouse"]`, () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});