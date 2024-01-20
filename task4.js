const person = {
    firstName: "Давид",
    lastName: "Бакурідзе",
    age: 21
};

person.email = "asdawee@example.com";

delete person.age;

console.log(person);