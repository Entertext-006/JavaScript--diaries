person1={
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    sayhello: () => {
        console.log("Hello! i am ${this.name}");
    }
};

person2={
    name: "Bob",
    age: 25,
    city: "Los Angeles",
    occupation: "Designer",
    sayhello: () => {
        console.log("Hello! i am ${this.name}");
    }
};

person1.sayhello();
person2.sayhello();