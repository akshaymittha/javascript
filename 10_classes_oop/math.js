const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// console.log(descriptor);

const obj = {
    name: "lemon tea",
    price: 10,
    isAvailable: true,

    orderObj: function () {
        console.log("object not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}