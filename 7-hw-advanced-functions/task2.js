const recursiveCounter = (num) => {
    console.log(num);
    if (num <= 0) {
        return 0;
    };
    return recursiveCounter(num-1);
};

recursiveCounter(5);