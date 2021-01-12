const assert = require('chai').assert;
const countOnly   = require('../countOnly');
const inspect = require('util').inspect;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe("#countOnly", () => {
  it(`returns ${inspect(result1["Jason"])} for result1["Jason"]`, () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  it(`returns ${inspect(result1["Karima"])} for result1["Karima"]`, () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  it(`returns ${inspect(result1["Fang"])} for result1["Fang"]`, () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  it(`returns ${inspect(result1["Agouhanna"])} for result1["Agouhanna"]`, () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});





// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);