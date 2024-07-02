class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}akshay`
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}

const akshay = new User("akshay@.ai", "abc")
console.log(akshay.password);