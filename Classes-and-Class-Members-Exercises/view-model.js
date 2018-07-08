class Textbox {
    constructor(selector, regex){
        this._elements = $(selector);
        this._invalidSymbol = regex;

        let that = this;

        this.elements.on("input", function (event) {
            that.value = $(event.target).val();
        })
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(text) {
        this._value = text;
        this.elements.val(text);
    }

    isValid(){
        return !this._invalidSymbol.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){
    console.log(textbox.value);
});