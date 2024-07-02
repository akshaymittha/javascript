const User = {
    _email: 'akshay@.ai',
    _passwoed: "abbc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const akshay = Object.create(User)
console.log(akshay.email);