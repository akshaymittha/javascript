// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, cur) => acc + cur, 0)

// console.log(myTotal);

const shoppingCart = [
    { itemName: 'js course', price: 999 },
    { itemName: 'mobile app', price: 499 },
    { itemName: 'graphic design', price: 899 },
    { itemName: 'data science', price: 699 },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);