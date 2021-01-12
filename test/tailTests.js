const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`returns ${tail(["Hello", "Lighthouse", "Labs"])} for ['Hello', 'Lighthouse', 'Labs']`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns ${tail(["Yo Yo", "Lighthouse", "Labs"])} for ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});