const user = {
    username: "akshay",
    price: 999,

    welcomeMeaage: function () {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}

// user.welcomeMeaage()
// user.username = "jack"
// user.welcomeMeaage()

// console.log(this);


// function chai() {
//     let username = "akshay"
//     console.log(this.username);
// }
// chai()

// const chai=function(){
//     let username = "akshay"
//         console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "akshay"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "akshay" })

console.log(addTwo(2, 3));

const myArray = [2, 5, 8, 9, 6]
// myArray.forEach()