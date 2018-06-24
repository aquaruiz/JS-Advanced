function aggregate(numbers) {
    numbers = numbers.map(Number);
    console.log("Sum = " + calc(numbers, (a, b) => a + b));
    console.log("Min = " + calc(numbers, (a, b) => Math.min(a, b)));
    console.log("Max = " + calc(numbers, (a, b) => Math.max(a, b)));
    console.log("Product = " + calc(numbers, (a, b) => a * b));
    console.log("Join = " + calc(numbers, (a, b) => "" + a + b));

    function calc(numbers, expession) {
        let result = numbers[0];

        for (let number of numbers.slice(1)) {
            result = expession(result, number);
        }

        return result;
    }
}

aggregate([2,3,10,5]);
aggregate([5, -3, 20, 7, 0.5]);