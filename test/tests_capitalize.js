
import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect

// Test suites for the capitalize function

describe("Basic functionality of the capitalize function", () => {
    it("All letters are in higher case", () =>{
        expect(capitalize('TAMPERE')).to.equal('Tampere')
    })
    it("First letter is in higher case", () =>{
        expect(capitalize('Tampere')).to.equal('Tampere')
    })
    it("All letters are in lower case", () =>{
        expect(capitalize('tampere')).to.equal('Tampere')
    })

    
    ; })

    describe("Behavior of the capitalize function in special cases", () => {

        it("String does not contain letters", () =>{
            expect(capitalize('5')).to.equal('5')
        })
        it("First mark in a string is a number", () =>{
            expect(capitalize('5tampere')).to.equal('5tampere')
        })
        it("Empty string", () =>{
            expect(capitalize('')).to.equal('')
        })
    ; })

