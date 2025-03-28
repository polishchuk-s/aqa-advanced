const person = {
    firstName: "Daniel",
    lastName: "McMurphy",
    age: 52,
};
person.email = "d.mcmurphy@email.com";
delete person.age;

console.log(person);