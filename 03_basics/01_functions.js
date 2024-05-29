
function myName() {
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("y");

}

// myName()
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(10, 20)
// addTwoNumbers(3, "4")
function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

function loginUserMessage(username = "jack") {
    if (!username) {
        console.log("please enter user name");
        return
    }
    return `${username} just loggedIn`
}

// console.log(loginUserMessage("akshay"));
// console.log(loginUserMessage("akshay"));

function calculatecartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculatecartPrice(200, 400, 300));

const user = {
    username: "akshay",
    price: 199
}

function handleObject(anuObjet) {
    console.log(`Username is ${anuObjet.username} and price is ${anuObjet.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myArray = [200, 400, 300, 500]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([100, 200, 400]));

