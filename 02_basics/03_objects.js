// singleton
// Object.create

// object literals
const mySymbol = Symbol("key1")

const jsUser = {
    name: "akshay",
    "full name": "akshay mittha",
    [mySymbol]: "mykey1",
    age: 18,
    location: "pune",
    email: "akshay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySymbol]);

jsUser.email = "mittha@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "jack@gmail.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello js user");
}
jsUser.greetingTwo = function () {
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());