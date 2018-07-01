function getFibonator() {
    let initialFib = 0;
    let firstFib = 1;

    return function () {
        let secondFib = initialFib + firstFib;
        initialFib = firstFib;
        firstFib = secondFib;
        return initialFib;
    }
}


let nextFibonacci = getFibonator();
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());
console.log(nextFibonacci());


