class Collection {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.size++;
        this.list.push(element);
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.list.length){
            this.list[index] = "";
            this.size--;
            this.list = this.list.filter(x => x !== "");
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

let collection = new Collection();
collection.add(3);
collection.add(4);
collection.add(5);
collection.add(6);
console.log(collection.size);
collection.remove(2);
console.log(collection.get(2));