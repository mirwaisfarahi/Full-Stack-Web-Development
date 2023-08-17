// passing object to a function and changing its value will affect the value outside of the function
const obj = {
    name: 'Mirwais',
    'job': 'System analyst',
    age: 29
};

// passing obj to function to change job value
function changeValue(obj) {
    obj.job = 'Full-Stack Web App Developer';
    return obj;
};

console.log(changeValue(obj))

// passing an array to a function and the value change
const arr = [30, 40];

function changeArray(arr) {
    arr[0] = 20;
    return arr;
}

console.log(changeArray(arr))

// Function expression: function can be defined as an expression which makes it anonymous
const square = function(x) {
    return x * x;
}

console.log(square(20));

// A function can have name as well in function expression but it will refer to itself and it is useful in debugger's slack traces. 
// It is also function implementaiton based on a condition. This is also called recursive function.
const factorial = function fac(n) {
    return n < 2 ? 1 : n*fac(n-1)
}

console.log(factorial(0));

// It is good to use func exp when passing a function as an argument to another one.
function mapFunc(f, arr) {
    const result = [];

    for (const i in arr) {
        result[i] = f(arr[i]);
    }

    return result;
}

const f = function(num) {
    return num * num;
}

const numbers = [2,3,4,5];
console.log(mapFunc(f, numbers))


// Note: A method is a function that is a property of an object.

// Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:

const res = addition(10, 20);

function addition(a, b) {
    return a + b;
}


// Note: This works only when defining the function using the above syntax (i.e., function funcName(){}). The code below will not work.

// This means that function hoisting only works with function declarations—not with function expressions.

// const addition = (a, b) {
//     return a + b;
// }


// Using Objects for Lookups: It can be used when there is a limited range
// of values instead of switch or if/else statement.
const phonoticLookUp = (val) =>
{
    let result = '';

    switch(val) {
        case "a": result = 'print a'; break;
        case "b": result = 'print b'; break;
        case "c": result = 'print c'; break;
    }

    return result;
}
console.log(phonoticLookUp('a'));

// change above code using object
const phonoticLookUpObject = {
    "a": "print a",
    "b": "print b",
    "c": "print c"
};
console.log(phonoticLookUpObject.a);