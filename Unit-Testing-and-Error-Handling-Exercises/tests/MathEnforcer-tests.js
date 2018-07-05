let expect = require("chai").expect;
let mathEnforcer = require("../MathEnforcer").mathEnforcer;

describe("mathEnforcer()", function() {
    describe("cases Add()", function () {
        it("add 5 to non num", function () {
            expect(mathEnforcer.addFive("mamma mia")).to.be.equal(undefined, "Function returns the correct result");
        });
        it("add 5 to non", function () {
            expect(mathEnforcer.addFive()).to.be.equal(undefined, "Function returns the correct result");
        });
        it("add 5 to 5", function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10, "Function returns the correct result");
        });
        it("add 5 to -5", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0, "Function returns the correct result");
        });
        it("add 5 to 5.5", function () {
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5, "Function returns the correct result");
        });
        it("add 5 to -5.5", function () {
            expect(mathEnforcer.addFive(-5.5)).to.be.equal(-0.5, "Function returns the correct result");
        });
    });
    describe("cases subtract()", function () {
        it("subtract 10 from non num", function () {
            expect(mathEnforcer.subtractTen("mamma mia")).to.be.equal(undefined, "Function returns the correct result");
        });
        it("subtract 10 from nun", function () {
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined, "Function returns the correct result");
        });
        it("subtract 10 from 5", function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5, "Function returns the correct result");
        });
        it("subtract 10 from -5", function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15, "Function returns the correct result");
        });
        it("subtract 10 from 10.5", function () {
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5, "Function returns the correct result");
        });
        it("subtract 10 from -10.5", function () {
            expect(mathEnforcer.subtractTen(-10.5)).to.be.equal(-20.5, "Function returns the correct result");
        });
    });
    describe("cases sum(num1, num2)", function () {
        it("sum none with none", function () {
            expect(mathEnforcer.sum()).to.be.equal(undefined, "Function returns the correct result");
        });
        it("sum strings with none", function () {
            expect(mathEnforcer.sum("mamma mia")).to.be.equal(undefined, "Function returns the correct result");
        });
        it("sum str with num", function () {
            expect(mathEnforcer.sum("mamma mia", 5)).to.be.equal(undefined, "Function returns the correct result");
        });
        it("sum str with num", function () {
            expect(mathEnforcer.sum(67637)).to.be.equal(undefined, "Function returns the correct result");
        });
        it("sum str with num", function () {
            expect(mathEnforcer.sum("mamma mia", "5")).to.be.equal(undefined, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(5.5, -5)).to.be.equal(0.5, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(5, -5.5)).to.be.equal(-0.5, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(5, -5)).to.be.equal(0, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(5.5, 4.5)).to.be.equal(10, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(-5.5, 5.5)).to.be.equal(0, "Function returns the correct result");
        });
        it("sum num with num", function () {
            expect(mathEnforcer.sum(-5.5, -4.5)).to.be.equal(-10, "Function returns the correct result");
        });
    });
});