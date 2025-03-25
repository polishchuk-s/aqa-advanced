const car1 = {
    brand: "Audi",
    model: "A5",
    year: 2017,
};

const car2 = {
    brand: "Mercedes",
    model: "GLC",
    owner: 2019,
};

const car3 = { ...car1, ...car2};
console.log(car3);