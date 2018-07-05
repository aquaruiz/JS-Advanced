let expect = require("chai").expect;
let isOddOrEven = require("../EvenOrOdd").isOddOrEven;

describe("is odd or even", function() {
    it("with number parameter should return undefined", function () {
        expect(isOddOrEven(13)).to.be.equal(undefined, "Function did not return the correct result");
    });
    it("with object parameter should return undefined", function () {
        expect(isOddOrEven({})).to.be.equal(undefined, "Function did not return the correct result");
    });
    it("with massive parameter should return undefined", function () {
        expect(isOddOrEven([])).to.be.equal(undefined, "Function did not return the correct result");
    });
    it("with string parameter should return 5", function () {
        expect(isOddOrEven("mamma")).to.be.equal("odd", "Function did return the correct result");
    });
    it("with string parameter should return 4", function () {
        expect(isOddOrEven("mama")).to.be.equal("even", "Function did return the correct result");
    });
});