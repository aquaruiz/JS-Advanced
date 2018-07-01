function makeCollection() {
    let list = [];
    let size = 0;

    function add(element) {
        this.size++;
        list.push(element);
        list.sort((a, b) => a - b);
        return list;
    }
    
    function remove(index) {
        if (index >= 0 && index < list.length){
            list[index] = "";
            this.size--;
            list = list.filter(x => x !== "");
            return list;
        }
    }
    
    function get(index) {
        if (index >= 0 && index < list.length) {
            return list[index];
        }
    }


    return {add, remove, get, size};
}

let collection = makeCollection();
collection.add(5);
console.log(collection.size);