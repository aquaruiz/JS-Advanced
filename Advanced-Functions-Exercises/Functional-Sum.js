let add = (function() {
    let sum = 0;
    
    return function calc(el) {
        sum += Number(el);
        calc.toString = () => sum;
        return calc;
    }
})();

console.log("" + add(1));
console.log("" + add(1)(6)(-3));