let expect = require("chai").expect;
let sum = require("../SumofNumbers").sum;

describe("sum(arr) - sums array of numbers", function() {
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return -3 for [-1, -2]", function () {
        expect(sum([-1, -2])).to.be.equal(-3);
    });
    it("should return 0 for []", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should return NaN for ['mamma', 'mia']", function () {
        expect(sum(['mamma', 'mia'])).to.be.NaN;
    });
});