// Test-Driven Development with JS

// step 1: Red
// No function defined and yet a simple test is written in this step
// module.exports = null

// step 2: Green
// define adder function to pass the test
/*
const adder = function(a, b) {
    return a + b;
}
*/
// step 3: Refactor
// refactoring the above function without changing the actaul implementation of the code. So as you can see TDD helps to run the test on the updated function
// to make sure that still the output is same and there is no bug and error in the function.

// const adder = (a, b) => a + b;

// Repeat the above process. Added new tests which will fail then make tests Green by refacting the adder function
// const adder = (a, b, c) => (a | 0) + (b | 0) + (c | 0)

// run last test for adding multiple numbers. It fail then refactor the adder
const adder = (...numbers) => numbers.reduce((total, number) => total + number, 0)

module.exports = adder

