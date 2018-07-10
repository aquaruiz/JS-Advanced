function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ` + this.toString();
    }
}

class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    toString(){
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

extendClass(Person);

let p = new Person("baaa");
console.log(Person.prototype);  // Person.prototype === p.__proto__
console.log(p.toSpeciesString());