function makeFruitSalad() {

    class Melon {
        constructor(weight, melonSort){
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Water";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Fire";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Earth";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Air";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.allEls = ["Fire", "Earth", "Air", "Water"];
            this.element = "Water";
        }

        morph(){
            let newEl = this.allEls.shift();
            this.allEls.push(newEl);
            this.element = newEl;
            return this;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

// let m = new Melon(100, 'Melon'); // throw error

// let wm = new Watermelon(100, 'Watermelon');
// console.log(wm.toString());

let mm = new Melolemonmelon(100, 'Melolemonmelon');
console.log(mm.toString());
for (let i = 0; i < 4; i++) {
    mm.morph();
    console.log(mm.toString());
}