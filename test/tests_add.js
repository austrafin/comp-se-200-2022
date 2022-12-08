
import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

// Test suites for the add function

describe("Basic functionality of the add function", () => {

    it("Basic adding", () =>{
        expect(add(5,2)).to.equal(7)
    })
    it("Zero in a sum", () =>{
        expect(add(0,2)).to.equal(2)
    })
    it("One value negative", () =>{
        expect(add(-5,2)).to.equal(-3)
    })
    it("Both values negative", () =>{
        expect(add(-5,-2)).to.equal(-7)
    })
    
    ; })

    describe("Handling of erroneous input in the add function", () => {

    it("Trying to add with a non numeric value ", () =>{
        expect(function(){add('a','b')}).to.throw(TypeError)
     })

     ; })