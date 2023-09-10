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
   - An example is provided in [middleware chain section](middlewareChain.js)

#### What is next() function in middleware chain?

- In JavaScript, the next() function is commonly used in the context of middleware or asynchronous code to pass control to the next function or middleware in a sequence.
- Typically, in a middleware stack, each middleware function is responsible for executing some logic and then calling next() to pass control to the next middleware in the stack. This allows for sequential execution of middleware functions.

4. Asynchronous Programming

- no contents yet

## Dealing with Side Effects

### Identifying and Handling Side Effects

- Side effects occur when a function changes something outside of its scope, such as modifying global variables or interacting with external resources like databases.
- In functional programming, reducing and managing side effects is essential to maintain the purity and predictability of your code.
- Look at [side effect code example](sideEffects.js)

### Pure Functions and Side Effect Management

- We can write pure functions by seperating pure and impure parts of the code.
- Look at [pure function example](sideEffects.js)

### Introduction to Monads

- contents needs to be added

## Data Transformation and Manipulation

### Overview of Data Transformation in Functional Programming

- Functional programming is a natural fit for transforming and manipulating data. It encourages you to apply functions to data to get the desired output while maintaining a clear and predictable flow.

### Working with Map, Filter, and Reduce Functions

- Let's dive into some commonly used higher-order functions for data transformation:

1. Map: Transform each element in an array and return a new array. Look at [map example](map.js)
2. Filter: Create a new array containing elements that satisfy a given condition. Look at [filter example](filter.js)
3. Reduce: Combine all elements in an array into a single value. Look at [reduce example](reduce.js)
