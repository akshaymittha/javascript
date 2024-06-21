const user = {
    username: "akshay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "akshay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`welocme ${this.username}`);
    }

    // return this
}

const userOne = new User("akshay", 12, true)
const userTwo = new User("mittha", 11, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);