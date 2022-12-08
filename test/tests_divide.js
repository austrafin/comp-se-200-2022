
import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect

// Test suites for the divide function

describe("Basic functionality of the divide function", () => {

    it("Dividing result integer", () =>{
        expect(divide(8, 4)).to.equal(2)
    })

    it("Dividing result rational number", () =>{
        expect(divide(9, 4)).to.equal(2.25)
    })

    it("Dividing one value negative", () =>{
        expect(divide(-8, 4)).to.equal(-2)
    })

    it("Dividing both values negative", () =>{
        expect(divide(-8, -4)).to.equal(2)
    })

    it("Dividend and divisor have the same value", () =>{
        expect(divide(4, 4)).to.equal(1)
    })

    ; })

    describe("Handling of zero in the divide function", () => {

        it("Dividend is zero", () =>{
            expect(divide(0, 4)).to.equal(0)
        })
    
        it("Divisor is zero", () =>{
            expect(divide(9, 0)).to.deep.equal(Infinity)
        })
        
        it("Dividend and divisor is zero", () =>{
            expect(divide(0, 0)).to.deep.equal(NaN)
        })

    ; })

    describe("Handling of erroneous input in the divide function", () => {

        it("Input is non numeric", () =>{
            expect(function(){divide('A', 'B')}).to.throw(TypeError)
        })

    ; })

