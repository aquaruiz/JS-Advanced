let expect = require("chai").expect;
let rgbToHexColor = require("../RGBtoHex").rgbToHexColor;

describe("rgbToHexColor(red, green, blue) - converts colot from RGB to HEX", function() {
    it("should return undefined for (-255, 0, 0)", function () {
        expect(rgbToHexColor(-255, 0, 0)).to.be.equal(undefined);
    });
    it("should return undefined for (0, 'beee', 0)", function () {
        expect(rgbToHexColor(0, 'beee', 0)).to.be.equal(undefined);
    });
    it("should return undefined for (0, 0, 258)", function () {
        expect(rgbToHexColor(0, 0, 258)).to.be.equal(undefined);
    });
    it("should return '#FFFFFF' for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    it("should return undefined for ()", function () {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
    it("should return undefined for ('5', {0}, [258])", function () {
        expect(rgbToHexColor('5', {0:9}, [258])).to.be.equal(undefined);
    });

    it("should return undefined for (0, 0, 3.14)", function () {
        expect(rgbToHexColor(0, 0, 3.14)).to.be.equal(undefined);
    });
    it("should return '#000000' for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
});