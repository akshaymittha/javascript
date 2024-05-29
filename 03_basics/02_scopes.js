// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "akshay"

    function two() {
        const website = "google"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "akshay"
    if (username === "akshay") {
        const website = "google"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ******************************* Interseting ********************
console.log(addOne(5));

function addOne(num) {
    return num + 1
}

addTwo(5)
const addTwo = function (num) {
    return num + 2
}
