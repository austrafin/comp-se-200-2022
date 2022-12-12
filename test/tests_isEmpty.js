import chai from "chai";
import isEmpty from "../src/isEmpty.js";
const expect = chai.expect;

// Test suites for the eq function

describe("Check empty values with isEmpty function", () => {
  it("Checks a null value", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("Checks a boolean true value", () => {
    expect(isEmpty(true)).to.be.true;
  });

  it("Checks a boolean false value", () => {
    expect(isEmpty(false)).to.be.true;
  });

  it("Checks a number", () => {
    expect(isEmpty(1)).to.be.true;
  });

  it("Checks an array", () => {
    expect(isEmpty([])).to.be.true;
  });
});

describe("Check non-empty values with isEmpty function", () => {
  it("Checks a string", () => {
    expect(isEmpty("abc")).to.be.false;
  });

  it("Checks an array", () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it("Checks an object", () => {
    expect(isEmpty({ a: 1 })).to.be.false;
  });
});
