
import chai from "chai"
import defaultTo from "../src/defaultTo.js"
const expect = chai.expect

// Test suites for the defaultTo function

describe("Basic functionality of the defaultTo function", () => {
    it("Given value is null", () =>{
        expect(defaultTo(null, 10)).to.equal(10)
    })
    it("Given value is undefined", () =>{
        expect(defaultTo(undefined, 10)).to.equal(10)
    })
    it("Given value is Nan", () =>{
        expect(defaultTo(NaN, 10)).to.equal(10)
    })
    it("Given value is defined", () =>{
        expect(defaultTo(5, 10)).to.equal(5)
    })

    ; })

