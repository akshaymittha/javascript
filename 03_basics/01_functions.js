
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
console.log(loginUserMessage("akshay"));