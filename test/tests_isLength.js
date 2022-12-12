import chai from "chai";
import isLength from "../src/isLength.js";
const expect = chai.expect;

describe("Test valid lenghts with isLength function", () => {
  it("Checks a positive number", () => {
    expect(isLength(3)).to.be.true;
  });
});

describe("Test non-valid lenghts with isLength function", () => {
  it("Checks a negative number", () => {
    expect(isLength(-3)).to.be.false;
  });

  it("Checks a negative number", () => {
    expect(isLength(Infinity)).to.be.false;
  });

  it("Checks a negative number", () => {
    expect(isLength("a")).to.be.false;
  });
});
