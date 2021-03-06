let vectorsMaths = (function () {
    return {
        add: function (vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply: function (vec, scalar) {
            return [vec[0] * scalar, vec[1] * scalar];
        },
        length: function (vec) {
            return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
        },
        dot: function (vec1, vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
        },
        cross: function (vec1, vec2) {
            return vec1[0] * vec2[1] - vec1[1] * vec2[0];
        }
    }
})();

console.log(vectorsMaths.add([0, 0], [0, 0]));
console.log(vectorsMaths.add([1, 1], [1, 0]));
console.log(vectorsMaths.multiply([3.5, -2], 2));
console.log(vectorsMaths.length([3, -4]));
console.log(vectorsMaths.dot([1, 0], [0, -1]));
console.log(vectorsMaths.cross([3, 7], [1, 0]));

