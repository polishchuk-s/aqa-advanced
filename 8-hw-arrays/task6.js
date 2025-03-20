const numberList = [1,10,14,2,4,5,43,34];
const copiedNumberList = numberList.slice();
copiedNumberList.sort(function (a,b) {return a - b});

console.log(numberList);
console.log(copiedNumberList);