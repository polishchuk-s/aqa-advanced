function square1 (width, height) {
    calculatedSquare = width * height;
    return calculatedSquare;
};
console.log(`Function #1 outcome: ${square1(5,10)}`);

let square2 = function (width, height) {
    calculatedSquare = width * height;
    return calculatedSquare;
}
console.log(`Function #2 outcome: ${square2(5,4)}`);

const square3 = (width, height) => {
    return width * height;
};
console.log(`Function #3 outcome: ${square3(3,15)}`);