const accountId = 413005
let accountmail = "akshay@gmail.com"
var accountPassword = "123456"
accountCity = "Pune"
let accountState;

// accountId = 2
accountmail = "jack@email.com"
accountPassword = "987456"
accountCity = "HYD"

console.log(accountId);

/*
Prefer not to use var, 
bcoz of issue in block scope and functional scope
*/

console.table([accountId,accountmail,accountPassword,accountCity,accountState])