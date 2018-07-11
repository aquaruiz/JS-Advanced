let Entity = require("./Entity");
let Dog = require("./Dog");

class Person extends Entity{
    constructor(name, phrase, dog){
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }

    get dog () {
        return this._dog;
    }

    set dog (val) {
        if (val instanceof Dog) {
            this._dog = val;
        } else {
            throw new TypeError("No Dog obj!");
        }
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`
    }
}

module.exports = Person;