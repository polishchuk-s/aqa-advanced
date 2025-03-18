function isAdult (age) {
    if (age >=18) {
        return true;
    } else {
        return false;
    };
};

console.log(`Is a person 1 adult - ${isAdult(25)}`);
console.log(`Is a person 2 adult - ${isAdult(15)}`);