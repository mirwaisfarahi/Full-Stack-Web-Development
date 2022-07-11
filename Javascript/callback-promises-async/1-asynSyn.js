// To test a synchronous system, write this code in JavaScript:

console.log(" I ");
console.log(" eat ");
console.log(" Ice Cream ");

// Asynchronous code example
// Let's say it takes two seconds to eat some ice cream.
console.log("I")
setTimeout(() => {
    console.log(" eat ")
}, 2000)

console.log(" Ice Cream ");
