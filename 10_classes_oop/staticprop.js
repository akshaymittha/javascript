class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const akshay = new User("akshay")
// console.log(akshay.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const phone = new Teacher("phone", "phone@i.com")
console.log(phone.createId())