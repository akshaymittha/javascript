// foreach loop

const coding = ['js', 'java', 'cpp', 'python']
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((value) => {
//     console.log(value);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'javapythonscript',
        languageFileName: 'py'
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})