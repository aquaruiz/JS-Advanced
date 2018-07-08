let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
global.$ = $;

let nuke = require("../armagedom").nuke;

describe("nuke() testing", function() {
    beforeEach("construct HTML for testing", function () {
            document.body.innerHTML = `
                <div id="target">
                    <div class="nested target">
                        <p>This is some text</p>
                    </div>
                    <div class="target">
                        <p>Empty div</p>
                    </div>
                    <div class="inside">
                        <span class="nested">Some more text</span>
                        <span class="target">Some more text</span>
                    </div>
                   </div>`;
    });

    describe("invalid selectors input", function () {
        it("should do nothing with invalid 1st selector", function () {
            let initialState = $("body").html();
            let selector1 = "invalidSelector1";
            let selector2 = "#target";
            nuke(selector1, selector2);
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it("should do nothing with invalid 2st selector", function () {
            let initialState = $("body").html();
            let selector2 = "invalidSelector1";
            let selector1 = "#target";
            nuke(selector1, selector2);
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it("should do nothing without 1st selector", function () {
            let initialState = $("body").html();
            let selector2 = "#target";
            nuke("", selector2);
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it("should do nothing without 2st selector", function () {
            let initialState = $("body").html();
            let selector1 = "#target";
            nuke(selector1);
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it("should do nothing without selectors", function () {
            let initialState = $("body").html();
            nuke();
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it("should do nothing with both the same selectors", function () {
            let initialState = $("body").html();
            let selector1 = "#target";
            let selector2 = selector1;
            nuke(selector1, selector2);
            let endState = $("body").html();
            expect(endState).to.be.equal(initialState);
        });
        it('should do nothing with non-matching selectors', () => { // NB!
            let selector1 = '.inside';
            let selector2 = '.target';
            let initialState = $('body').html();
            nuke(selector1, selector2);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
    });
    describe('valid input', function () {
        it('should delete all nodes that match both selectors (.target .nested)', () => {
            let selector1 = '.target';
            let selector2 = '.nested';
            nuke(selector1, selector2);
            let match = $(selector1).filter(selector2);
            expect(match.length).to.equal(0);
        });
        it('should delete all nodes that match both selectors (.nested span)', () => {
            let selector1 = '.nested';
            let selector2 = 'span';
            nuke(selector1, selector2);
            let match = $(selector1).filter(selector2);
            expect(match.length).to.equal(0);
        });
    });
});