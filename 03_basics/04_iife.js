//  Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();
// chai()

// ()-> funtion defifnition
// ()-> Execution

((name) => {
    // simple IIFE(unnamed)
    console.log(`DB connected ${name}`);
})('akshay')