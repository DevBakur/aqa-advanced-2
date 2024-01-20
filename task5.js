const users = [
    { name: "John", email: "john@example.com", age: 25 },
    { name: "Alice", email: "alice@example.com", age: 30 },
    { name: "Bob", email: "bob@example.com", age: 22 }
];

for (const { name, email, age } of users) {

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("--------------------");
}
