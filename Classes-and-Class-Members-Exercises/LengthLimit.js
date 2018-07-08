class Stringer {
    constructor(str, len){
        this.innerString = str;
        this.innerLength = Number(len);
    }

    increase(len){
        this.innerLength += Number(len);
        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    decrease(len){
        this.innerLength -= Number(len);
        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        let inititalLength = this.innerString.length;
        if(this.innerLength < inititalLength){
            return this.innerString.substr(0, this.innerLength) + "...";
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test
test.decrease(3);

console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test