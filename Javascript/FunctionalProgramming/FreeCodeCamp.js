// Functional Programming
/**
 * Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
 */


function demo(str) {
    return function (arr) {
        return str+ " " +arr;
    }
}

console.log(demo("farah"))