// const coding = ['js', 'java', 'python', 'cpp']

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumber = numbers.filter((num) => num > 4)
// const newNumber = numbers.filter((num) => {
//     return num > 4
// })
// console.log(newNumber);

// const nums = []
// numbers.forEach((num) => {
//     if (num > 4) {
//         nums.push(num)
//     }
// })
// console.log(nums);

const books = [
    {
        title: 'book one', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'book two', genre: 'non-fiction', publish: 2000, edition: 2008
    },
    {
        title: 'book two', genre: 'history', publish: 1999, edition: 2007
    },
    {
        title: 'book three', genre: 'science', publish: 1989, edition: 2010
    },
    {
        title: 'book four', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'book five', genre: 'fiction', publish: 1986, edition: 2011
    },
]

let userBooks = books.filter((bk) => bk.genre === 'history')
// userBooks = books.filter((bk) => { return bk.publish >= 2000 })
// userBooks = books.filter((bk) => bk.publish >= 1980)
userBooks = books.filter((bk) => bk.publish >= 1980 && bk.genre === "history")
console.log(userBooks);