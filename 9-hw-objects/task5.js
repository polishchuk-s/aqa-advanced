const users = [
    {name: "Sarah", email: "sarah1343@email.com", age: 24, profession: "designer"},
    {name: "Lisa", email: "lisadaniels@email.com", age: 29, profession: "teacher"},
    {name: "Aaron", email: "aaron23423.d@email.com", age: 58, profession: "software engineer"},
    {name: "Lloyd", email: "sar235@email.com", age: 21, profession: "student"}, 
];

for (const person of users) {
    console.log(person);
};

for (const { name, email, age, profession } of users) {
    console.log (`Name: ${name}, Email: ${email}, Age: ${age}, Profession: ${profession}`);
};