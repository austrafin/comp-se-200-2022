import chai from "chai";
import map from "../src/map.js";
const expect = chai.expect;

describe("Basic functionality of the map function", () => {
  it("Applies the given function to the value", () => {
    expect(map([4, 8], (value) => value * value)).to.deep.equal([16, 64]);
  });
});

describe("Error handling of the map function", () => {
  it("Non-array as the array parameter", () => {
    expect(map(1, (value) => value)).to.deep.equal([undefined]);
  });

  it("Function parameter not a function", () => {
    expect(() => map([4, 8], 1)).to.throw(TypeError);
  });
});
