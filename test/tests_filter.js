import chai from "chai";
import filter from "../src/filter.js";
const expect = chai.expect;

describe("Basic functionality of the filter function", () => {
  it("Filters out unwanted objects", () => {
    expect(
      filter(
        [
          { user: "barney", active: true },
          { user: "fred", active: false },
        ],
        ({ active }) => active
      )
    ).to.deep.equal([{ user: "barney", active: true }]);
  });

  it("Filters out unwanted values", () => {
    expect(filter([-1, 0, 1, 2], (value) => value > 0)).to.deep.equal([1, 2]);
  });
});

describe("Error handling of the filter function", () => {
  it("Non-array as the array parameter", () => {
    expect(filter(1, (value) => value)).to.deep.equal([[]]);
  });

  it("Function parameter not a function", () => {
    expect(filter([], 1)).to.deep.equal([[]]);
  });
});
