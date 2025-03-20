const initialArray = [1, 2, 3, 4, 5];
const mutatedArray = initialArray.map((number) => number * initialArray.indexOf(number));
console.log(mutatedArray);