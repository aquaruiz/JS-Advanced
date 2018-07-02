let expect = require("chai").expect;
let isSymmetric = require("../CheckforSymmetry").isSymmetric;

describe("isSymmetric(arr) - checks symmetry of an array", function() {
    it("should return true for [1, 2, 1]", function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return true for [1, 2, 2, 1]", function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });
    it("should return false for [1, 2, 1, 4]", function () {
        expect(isSymmetric([1, 2, 1, 4])).to.be.equal(false);
    });
    it("should return true for []", function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it("should return false for 'beee'", function () {
        expect(isSymmetric('beee')).to.be.equal(false);
    });
    it("should return true for [1, 2, 1]", function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
});

