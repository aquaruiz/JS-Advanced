class Textbox {
    constructor(selector, regex){
        this._elements = $(selector);
        this._invalidSymbol = regex;

        $(this._elements).on("input valueChange", (event) => {
            this._value = $(event.target).val();
			this.updateElements(); 
		)
    }

	updateElements(){
		for(let el of this._elements){
			$(el).val(this._value);}
	}
	
    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
		this.updateElements();
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