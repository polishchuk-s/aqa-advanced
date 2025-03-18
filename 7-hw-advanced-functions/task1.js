const handleNum = (num, callbackEven, callbackOdd) => {
    if (num % 2 === 0) {
        handleEven();
    };
    if (num % 2 !== 0) {
        handleOdd();
    };
};

const handleEven = () => {
    console.log("number is even");
};
const handleOdd = () => {
    console.log("number is odd");
};

handleNum(11, handleEven, handleOdd);

