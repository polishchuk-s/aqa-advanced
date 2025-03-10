const number = 5;

console.log("Використовуючи цикл for: ");
for (let i = 1; i<=10; i++) {
    console.log(`${number} x ${i} = ${number*i}`);
};

console.log("Використовуючи цикл while: ");
let count = 1;
while (count<=10) {
    console.log(`${number} x ${count} = ${number*count}`);
    count++;
};