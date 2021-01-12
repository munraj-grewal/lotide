const assert = require('chai').assert;
const findKey = require('../findKey');

const find = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#countOnly", () => {
  it(`returns ${findKey(find, x => x.stars === 2)} for findKey(find, x => x.stars === 2)`, () => {
    assert.strictEqual(findKey(find, x => x.stars === 2), "noma");
  });
});