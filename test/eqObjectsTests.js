const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const fg = {f: "1", g: "2"};
const gf = {f: "2", g: "2"};
const inspect = require('util').inspect;

describe("#eqObjects", () => {
  it(`returns 'true' for ${inspect(ab)}, ${inspect(ba)}`, () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it(`returns 'false' for ${inspect(ab)}, ${inspect(abc)}`, () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it(`returns 'true' for ${inspect(cd)}, ${inspect(dc)}`, () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it(`returns 'false' for ${inspect(cd)}, ${inspect(cd2)}`, () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  it(`returns 'false' for ${inspect(g)}, ${inspect(gf)}`, () => {
    assert.deepEqual(eqObjects(fg,gf), false);
  });
  it(`returns 'false' for ${inspect(ab)}, ${inspect(fg)}`, () => {
    assert.deepEqual(eqObjects(ab,fg), false);
  });
});