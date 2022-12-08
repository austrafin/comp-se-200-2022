
import chai from "chai"
import countBy from "../src/countBy.js"
const expect = chai.expect

// Test suites for the countBy function

// Dataset with product name, boolean value for availability and numeric value for amount
const dataset_1 = [
       { 'product': 'tomato', 'instock': true, 'amount': 45 },
       { 'product': 'blueberry', 'instock': true, 'amount': 120 },
       { 'product': 'strawberry', 'instock': false, 'amount': 0 },
       { 'product': 'apple', 'instock': true, 'amount': 70 }
     ]

 // Empty dataset 
 const dataset_2 = [
      ]

describe("Basic functionality of the countBy function", () => {
    it("dataset_1 boolean count from values", () =>{
        expect(countBy(dataset_1, row => row.instock)).to.deep.equal({ 'true': 3, 'false': 1 })
    })
    it("dataset_1 boolean count from condition", () =>{
        expect(countBy(dataset_1, row => row.amount > 60)).to.deep.equal({ 'true': 2, 'false': 2 })
    })
    it("dataset_2 handling of an empty dataset", () =>{
        expect(countBy(dataset_2, row => row.instock )).to.deep.equal({ })
    })

    ; })

