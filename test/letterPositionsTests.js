const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#countOnly", () => {
  it(`returns ${letterPositions("hello").e} for "hello"`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});