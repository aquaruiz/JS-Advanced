let expect = require("chai").expect;
let createCalculator = require("../AddSubtract").createCalculator;

describe("createCalculator() - does simple calc operations", function() {
    let calc;

    beforeEach(function() {
        calc = createCalculator();
    });

    it("should return 5 after {add: 3, add: 2}", function () {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return 0 after initial setup", function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return -5 after {subtract: 3, subtract: 2}", function () {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return -1.1 after {add: -3.3, subtract: -2.2}", function () {
        calc.add(-3.3);
        calc.subtract(-2.2);
        let value = Math.round(calc.get()*1000)/1000;
        expect(value).to.be.equal(-1.1);
    });
    it("should return 1.1 after {add: 3.3, subtract: 2.2}", function () {
        calc.add(3.3);
        calc.subtract(2.2);
        let value = Math.round(calc.get()*1000)/1000;
        expect(value).to.be.equal(1.1);
    });
    it("should return NaN add('beeee')", function () {
        calc.add("beeeeeee");
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN subtract('beeee')", function () {
        calc.subtract("beeeeeee");
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return 5 after {add 10; subtract 7.7; add 2}", function() {
        calc.add(10);
        calc.subtract('7');
        calc.add('2');
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
});