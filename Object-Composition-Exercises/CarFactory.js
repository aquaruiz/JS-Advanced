function assemble(inputOrder) {
    let engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}];

    let carriage = {
        Hatchback: {type: "hatchback", color: undefined},
        Coupe: {type: "coupe", color: undefined}
    };

    // straightening order engine power value
    if (Number(inputOrder.power) <= 90){
        inputOrder.power = 90;
    } else if (Number(inputOrder.power) <= 120){
        inputOrder.power = 120;
    } else {
        inputOrder.power = 200;
    }

    // straightening order wheel size value
    if (Number(inputOrder.wheelsize) % 2 !== 1) {
        inputOrder.wheelsize = Math.floor(Number(inputOrder.wheelsize) - 1);
    }

    let newCar = {
        model: inputOrder.model,
        engine: {power: inputOrder.power, volume: engines.filter(x => x.power === inputOrder.power)[0].volume},
        carriage: {type: inputOrder.carriage, color: inputOrder.color},
        wheels: [inputOrder.wheelsize, inputOrder.wheelsize, inputOrder.wheelsize, inputOrder.wheelsize]
    };

    return newCar;
}

// console.log(assemble({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14.5
// }));

console.log(assemble({
    model: 'Opel Vectra',
    power: 1100,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));