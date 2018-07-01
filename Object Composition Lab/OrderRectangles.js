function createRectangle(input) {
    let output = [];

    for (let [width, height] of input) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function (otherRectangle) {
                return otherRectangle.area() - rectangle.area() || otherRectangle.width - rectangle.width;
            }
        };

        output.push(rectangle);
    }

    output.sort((a, b) => a.compareTo(b));
    return output;
}

// console.log(createRectangle([[10,5],[5,12]]));
console.log(createRectangle([[10, 5], [3, 20], [5, 12]]));