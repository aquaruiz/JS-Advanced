function sortMap(map, sortFunc = (a, b) => a[0].localeCompare(b[0])) {
    let entries = Array.from(map.entries()) // [dimentional array - key value]
        .sort(sortFunc);

    let sortedMap = new Map();
    for (let entry of entries){
        sortedMap.set(entry[0], entry[1]);
    }

    return sortedMap;
}

let map = new Map();
map.set("300","Pesho");
map.set("10","Gosho");
map.set("7","Aleks");
console.log(sortMap(map, (a, b) => a[0] - (b[0])));
console.log(sortMap(map));

map = new Map();
map.set("Stefan",true);
map.set("Azazel",false);
map.set("Bismoth",false);
map.set("Balrog",true);
map.set("Martel",true);
let sortedMap = sortMap(map);
console.log(sortedMap);

module.exports = sortMap;