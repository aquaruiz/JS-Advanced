let result = (function() {
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

    class Form {
        constructor() {
            for (let textbox of arguments) {
                if (!(textbox instanceof Textbox))
                    throw new Error('Passed argument was not a textbox');
            }

            this._element = $('<div>').addClass('form');
            this._textboxes = [];

            for (let textbox of arguments) {
                this._element.append(textbox.elements);
                this._textboxes.push(textbox);
            }
        }

        submit() {
            let isValid = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    textbox.elements.css('border', '2px solid green')
                } else {
                    isValid = false;
                    textbox.elements.css('border', '2px solid red')
                }
            }

            return isValid;
        }

        attach(selector) {
            let container = $(selector);
            container.append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");