const name = "akshay"
const repoOunt = 50

// console.log(name + repoOunt + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoOunt}`);

const gameName = new String('akshay-m')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   akshay.    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://akshay.com/akshay%10m"
// console.log(url.replace('%10', '-'))

// console.log(url.includes('akshay'))
// console.log(url.includes('jack'))

console.log(gameName.split('-'));
