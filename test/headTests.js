const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it(`returns ${head([1, 2, 3])} for [1, 2, 3]`, () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it(`returns ${head(['5'])} for ['5']`, () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});