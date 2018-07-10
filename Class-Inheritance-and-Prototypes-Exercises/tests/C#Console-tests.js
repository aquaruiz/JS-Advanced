let expect = require('chai').expect;

let Console = require('../C#Console').Console;

describe("Class C# Console", function () {
    describe("contains method writeLine", function () {
        it('should have method writeLine', function () {
            expect(typeof Console.writeLine).to.be.equal("function");
        });
        it('should throw error if no input', function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
    });
    describe("writeLine(string) tests", function () {
        it('should return same string if string input', function () {
            expect(Console.writeLine("beeee")).to.be.equal("beeee");
        });
    });
    describe("writeLine(obj) tests", function () {
        it('should return JSON string if object input', function () {
            expect(Console.writeLine({name: "Petia"})).to.be.equal(JSON.stringify({name: "Petia"}));
        });
    });
    describe("writeLine(str, placeholders) tests", function () {
        it('should throw error if no str string input', function () {
            expect(() => Console.writeLine(1, "{0}")).to.throw(TypeError);
        });
        it('should throw error if placeholders are not equal to params', function () {
            expect(() => Console.writeLine("BA{0}{1}", 2)).to.throw(RangeError);
        });
        it('should throw error if placeholders are with not correcponding indexes to qnty of params', function () {
            expect(() => Console.writeLine("BA{0}{2}{3}", 2, 3)).to.throw(RangeError);
        });
        it('should return corresponding string if placeholders are ok', function () {
            expect(Console.writeLine("I'm {0} from {1}. I'm {2}.", "Petia", "Plovdiv", 34)).to.be.equal("I'm Petia from Plovdiv. I'm 34.");
        });
    });
    describe("forgotten", function () {
        it("should return undefined with an invalid param (number)", function () {
            let result = Console.writeLine(100);
            expect(result).to.be.equal(undefined);
        });
        it("should return correct output with multiple valid String params", function () {
            let params = ['The sum of {2} and {1} is {0}', 'three', 'two', 'one'];
            let result = Console.writeLine(...params);
            expect(result).to.equal('The sum of one and two is three');
        });
        it("should return correct output with multiple valid String params", function () {
            let params = ['The sum is {0}', 'three'];
            let result = Console.writeLine(...params);
            expect(result).to.equal('The sum is three');
        });
    })
});