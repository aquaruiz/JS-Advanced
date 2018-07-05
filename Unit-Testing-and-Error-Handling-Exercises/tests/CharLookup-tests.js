let expect = require("chai").expect;
let lookupChar = require("../CharLookup").lookupChar;

describe("lookupChar(str, index)", function() {
    describe("Nominal cases (valid input)", function() {
        it("with index 0 in 'mamma mia' should return 'm'", function () {
            expect(lookupChar("mamma mia", 0)).to.be.equal("m", "Function returns the correct result");
        });
        it("with index 1 in 'mamma mia' should return 'a'", function () {
            expect(lookupChar("mamma mia", 1)).to.be.equal("a", "Function returns the correct result");
        });
    });
    describe("Special cases (invalid input)", function() {
        it("with non string should return undefined", function () {
            expect(lookupChar(15, 1)).to.be.equal(undefined, "Function did not return the correct result");
        });
        it("with non integer sec param should return undefined", function () {
            expect(lookupChar("mamma mia", "f")).to.be.equal(undefined, "Function did not return the correct result");
        });
        it("with non integer sec param should return undefined", function () {
            expect(lookupChar("mamma mia", 1.0000009)).to.be.equal(undefined, "Function did not return the correct result");
        });
        it("with non string should return undefined", function () {
            expect(lookupChar(5)).to.be.equal(undefined, "Function did not return the correct result");
        });
        it("with non should return undefined", function () {
            expect(lookupChar()).to.be.equal(undefined, "Function did not return the correct result");
        });
    });
    describe("Special cases (incorrect index parameter)", function() {
        it("with index out of range should return incorrect index", function () {
            expect(lookupChar("mamma mia", -55)).to.be.equal("Incorrect index", "Function did not return the correct result");
        });

        it("with index out of range should return incorrect index", function () {
            expect(lookupChar("ma", 2)).to.be.equal("Incorrect index", "Function did not return the correct result");
        });

        it("with index out of range should return incorrect index", function () {
            expect(lookupChar("mamma mia", 55)).to.be.equal("Incorrect index", "Function did not return the correct result");
        });
    })
});