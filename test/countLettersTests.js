const assert = require('chai').assert;
const countLetters   = require('../countLetters');

const count = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const inspect = require('util').inspect;

describe("#countLetters", () => {
  it(`returns ${inspect(countLetters("lighthouse in the house"))} for 'lighthouse in the house'`, () => {
    assert.deepEqual(countLetters("lighthouse in the house"), count);
  });
});