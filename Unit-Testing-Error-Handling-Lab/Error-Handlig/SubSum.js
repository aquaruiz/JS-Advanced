function subsum(arr, start, end){
    if (!Array.isArray(arr)){
        return NaN;
    } 

    arr = arr.map(Number);

    if (start < 0){
        start = 0;
    }

    if (end >= arr.length){
        end = arr.length - 1;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += arr[i];
    }

    return Math.round(sum * 10000) / 10000;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subsum([10, 'twenty', 30, 40], 0, 2));  // NaN
console.log(subsum([], 1, 2)); // 0
console.log(subsum('text', 0, 2));  // NaN