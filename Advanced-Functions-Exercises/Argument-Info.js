function result(inputs) {
    let typeCounts = {};

    for (let arg of arguments) {
        let currentType = typeof arg;
        if (!typeCounts.hasOwnProperty(currentType)){
            typeCounts[currentType] = 0;
        }

        typeCounts[currentType]++;
        console.log(`${currentType}: ${arg}`);
    }


    let sortedTypes = [...Object.keys(typeCounts)]
        .sort((a, b) => typeCounts[b] - typeCounts[a]);

    for (let sortedType of sortedTypes) {
        console.log(`${sortedType} = ${typeCounts[sortedType]}`);
    }
}

result('cat', 42, 52, function () { console.log('Hello world!'); });