let calcGcd = function (a, b) {
    [a, b] = [Number(a), Number(b)];

    while (b !== 0)
    {
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    return a;
};

console.log(calcGcd(252, '105'));