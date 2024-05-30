// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // ctr+d for duplicate
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`outer loop value : ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArray = ["flash", "ironman", "batman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// keywords
// break and continue

for (let index = 1; index <= 20; index++) {
    // if (index == 5) {
    //     console.log(`detected 5`);
    //     break;
    // }
    if (index == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`Value of i : ${index}`);
}