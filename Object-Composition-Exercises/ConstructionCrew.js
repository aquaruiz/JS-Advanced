function makeDrunk(input) {
    let worker = input;
    if (worker.handsShaking) {
        let alcoholToDrinkUp = 0.1 * Number(worker.weight) * Number(worker.experience);
        worker.bloodAlcoholLevel += alcoholToDrinkUp;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(makeDrunk({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(makeDrunk({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));

console.log(makeDrunk({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));