/**
 TWO POINTERS APPROACH:
 1. It can be used for searching, sorting, or manipulating elements in an array.
 2. It involves two pointers that traverse the array usually starting from different positions or moving at different
 spped.
 */

// EXAMPLE: Find a pair of numbers in a sorted array that sum up to a given target.
const twoSum = (arr = [1, 2, 3, 4, 5, 6], target = 9) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];
        if(sum === target) return [arr[left], arr[right]];
        if(sum < target)  left++;
        else {
            right--;
        }
    }

    return [];
};

console.log(twoSum()); // Output: [3, 6]

// Example: UniqueCounter for array
const UniqueCounter = (arr = [1, 2, 3, 4, 5, 6, 4, 4, 5, 6]) => {
    if(arr.length == 0) return 0;
    let j = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[j]) {
            j = j + 1;
            arr[j] = arr[i];
        }
    }

    return j;
};

console.log(UniqueCounter());

// APPLIED TWO POINTERS APPROACH
// the two pointer approach can be applied:
// 1. Array Manipulation