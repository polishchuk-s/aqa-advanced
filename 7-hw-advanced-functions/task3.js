const divide = (numerator, denominator) => {
    let result = numerator / denominator;
        if (denominator === 0) {
            throw new Error ("Division by 0 isn't possible");
        };
        if (typeof numerator !== "number" || typeof denominator !== "number") {
            throw new Error ("One of arguments (or both arguments) is not a number");
        }
    return console.log(`${numerator} / ${denominator} = ${result}`);
};

try {
    divide(21,7);
} 
catch (Error) {
    console.log(Error.message);
}
finally {
    console.log ('Processing of the first function is done!')
};

try {
    divide(15,"sdf");
}
catch (Error) {
    console.log(Error.message);
}
finally {
    console.log('Processing of the second function is done!')
};
