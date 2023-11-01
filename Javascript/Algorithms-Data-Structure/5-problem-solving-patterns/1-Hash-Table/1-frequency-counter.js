// FREQUENCY COUNTER
// This pattern uses objects or sets to collect values/frequency of values
// This can often avoid the need for nested loops or O(n2) operations with array and strings

//https://github.com/alexticovschi/JavaScript-Algorithms-and-Data-Structures-Masterclass
// https://github.com/NKaty/Algorithms-and-Data-Structures/tree/master/src/problem-solving-patterns/frequency-counter

// Example 1: Write a function called same which accept two arrays. Return true/false
same([1,2,3], [4,1,9]) // true
same([1,2,1], [4,4,1]) //false // must be same frequency

const same = (arr1, arr2) => {
    //first check for the same len
    if(arr1.length != arr2.length) return false;

    for(i in arr1) {
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex == -1) return false;

        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,1], [4,1,9])) // false

// Refactored: Frequency Counter
const sameRefactored = (arr1, arr2) => {
    if(arr1.length != arr2.length) return false;

    // use object to collect frequency of values
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key**2) in frequencyCounter1) return false;
    }

    return true;
}
console.log(sameRefactored([3, 2, 2, 4], [4, 4, 9, 16])) // true

//Example 2: Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

const areThereDuplicates = (...argu) => {

    if(!argu.length) return false;
    
    //use frequency counter: define an object
    const lookUp = {};
    for(let item of argu) {
        lookUp[item] = (lookUp[item] || 0) + 1;
        if(lookUp[item] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Example: 

const findPair = (arr, num) => {
    if(!arr.length) return false;

    const obj = {};

    for(val of arr) {
        obj[val] = (obj[val] || 0) + 1
    }
}

// Example 4: https://medium.com/nerd-for-tech/problem-solving-patterns-frequency-counter-20205a1ecfb7