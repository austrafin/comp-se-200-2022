import chai from "chai";
import eq from "../src/eq.js";
const expect = chai.expect;

describe("Eq function comparison of equal objects", () => {
  it("Compares equal objects", () => {
    const obj = { a: 1 };

    expect(eq(obj, obj)).to.be.true;
  });

  it("Compares equal strings", () => {
    expect(eq("a", "a")).to.be.true;
  });

  it("Compares equal numbers", () => {
    expect(eq(1, 1)).to.be.true;
  });

  it("Compares similar string and numbers", () => {
    expect(eq(1, "1")).to.be.true;
  });

  it("Compares NaN", () => {
    expect(eq(NaN, NaN)).to.be.true;
  });
});

describe("Eq function comparison of non-equal objects", () => {
  it("Compares non-equal objects", () => {
    expect(eq({ a: 1 }, { a: 1 })).to.be.false;
  });
});
