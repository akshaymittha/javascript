const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const newHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(newHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArray = anotherArray.flat(Infinity)
// console.log(usableArray);

console.log(Array.isArray("akshay"));
console.log(Array.from("akshay"));
console.log(Array.from({ name: "akshay" }));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));