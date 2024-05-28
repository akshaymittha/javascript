// Primitive
//  7 types : String,Number,Boolean,null,Symol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 321424758962245885555n

// Reference (Non-primitive)
// Array,Objets,Functions

const heros = ["ironman", "batman", "thor", "loki"];
let myObj = {
    name: "akshay",
    age: 20,
}

const myFunction = function () {
    console.log("hello");
}

// ************************ Memory ***********************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "akshay"

let anotherName = "mittha"

anotherName = "jack"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "akshay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);