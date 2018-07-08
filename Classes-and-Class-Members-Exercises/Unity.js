class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat){
            this.unitedRats.push(new Rat(otherRat));
        }
    }

    getRats(){
        return this.unitedRats.map(rat => rat.name);
    }

    toString(){
        return this.name + "\n" + this.unitedRats.map(rat => "##" + rat.name).join("\n");
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho


let rat = new Rat('Remmy');
let rat1 = new Rat('Rat1');
let rat2 = new Rat('Rat2');
rat.unite(rat1);
rat.unite(rat2);
console.log(rat.getRats());
console.log(rat.toString());