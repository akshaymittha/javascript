// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IND', "india")
map.set('USA', "united states")
map.set('FRA', "france")
map.set('IND', "india")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'GTA',
    game2: 'NFS'
}

// for (const [key, value] of myObject) {
//     console.log(key, '-:', value);
// }

