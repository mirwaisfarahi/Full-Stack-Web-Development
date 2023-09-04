# Functional Programming

- Note: Link: https://hackernoon.com/functional-programming-with-javascript-a-deep-dive

## Introduction to Functional Programming

Functional programming paradigm treats computation as the evaluation of matehmatical functions. It emphasize the use of pure functions, immutability, and high-order functions to create programs thare are more predictable and easier to reason about.

## KEY PRINCINPLES AND CONCEPTS

1.  Pure Functions: it produces the same output for the same input and it has no side effect

//Impure function:
let total = 0;
function addToTotal(amount) {
total += amount;
return total;
}

// Pure function:
function add(a, b) {
return a + b;
}

// In the above code, the addToTotal function modifies the external state (total), making it impure.
// On the other hand, the add function is pure because it doesn't rely on an external state and returns a consistent result for the same inputs.

// 2. Immutability:
// Once data is created, it remains unchanged. This helps in simplified reasoning as well as help in
// parallel processing.
const originalArray = [1,2,3];
const newArray = [...originalArray, 4]; // without editing original array, we created a new one and edited.
// There is a problem with this: more time and space complexity.

// Solution To The Problem of Immutability:

// BENEFITS OF FUNCTIONAL PROGRAMMING
// 1. Readability: The focus on small and pure functions leads to code that is easier to read.
// 2. Predictability: Since pure functions produce consistent output, debugging becomes a breeze
// 3. Concurrent and Parallel Execution: Immutability and lack of side effects make it easier to handle
// concurrency and parallelism.
// 4. Reusable Code: Hiher-order functions enable you to write reusable pieces of code that can be
// applied to different scenarios.

// IMMUTABILITY AND PURE FUNCTIONS
// Immutability ensures that once data is created, it cannot be changed. It can help in debugging and
// maintaining code.
const person = {name: "Mirwais Farahi", age: 30};
const updatePerson = {...person, age: 31}; // In this case new object is created and original one not changed.

// Characteristics of Pune Functions: Pure fuctions are the backbone of functional programming.
// 1. Deterministic: For the same input, a pure function will always return the same output
function addition(a, b) {
return a + b;
}
addition(10, 20); // 30
addition(5, 7); // 12
// 2. No Side Effects: Pure functions don't modify external state, ensuring a clear seperation
let totalValue = 0;
// Impure function
function addToTatalData(amount) {
total += amount;
return total;
}
// Pure function
function addToTotalPure(total, amount) {
return total + amount;
}

// Advantages of Immutability and Pure Functions
// Imagine working with a codebase where you can trust that functions won't unexpectedly modify data or
// introduce hidden dependencies. This level of predictability simplifies testing, refactoring, and collaboration.

## HIGHER-ORDER FUNCTIONS AND FUNCTION COMPOSITION

1.  Explloring Higher-Order Functions
    Higher-order functions accept other functions as arguments or return them.
    const multiplier = (factor) => {
    return function(number) {
    return number \* factor;
    };
    }

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
// Here multiplier function is a higher-order function.

2. Leveraging Function Composition
   add contents to the topic

// DATA PROCESSING PIPELINES
// Imagine you have an array of numbers, and you want to double each number, filter out the even ones
// and then find their sum.

const numbers = [1,2,3,4,5,6];

const doubleNumber = (num) => num \* 2;
const isEven = (num) => num % 2 === 0;

const result = numbers.map(doubleNumber).filter(isEven).reduce((total, num) => total + num);
console.log(result); // 42

3. Middleware Chains
   - In functional programming middleware chains are a way to compose and sequence a series of functions or middleware components to process a data or perform actions in a specific order.
   - In a middleware chain, each middleware component is a function that takes input, performs some processing or action, and optionally passes the modified input to the next middleware component in the chain. The output of one middleware function becomes the input of the next function, forming a pipeline-like structure.
     An example is provided in [middleware chain section](examples.js)
