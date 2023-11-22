/**
 TWO POINTERS APPROACH:
 1. It can be used for searching, sorting, or manipulating elements in an array.
 2. It involves two pointers that traverse the array usually starting from different positions or moving at different
 speed.
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

// APPLIED TWO POINTERS APPROACH STRATEGIES
// 1. The "Meet in the middle" strategy:
// A strategy of two pointers starting from opposite ends and moving towards each other until they meet each other.
// Ofen used with sorted data structure. Usefull for methods like finding pairs, triplets with specific sum
// or finding the closest pair to a target.
function meetInTheMiddle(nums = [2, 7, 11, 15], target = 9) {
    nums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        // calculate current sum
        let currentSum = nums[left] + nums[right]

        if(currentSum == target) return [left, right]
        else if(currentSum < target) left++;
        else right--
    }

    return [];
}

console.log(meetInTheMiddle()); // [0, 1]

// 2. Fast and Slow Strategy:
// Here, one pointer movies fasther than the other one. The fast pointer moves multiple steps at a time.
// While the slow pointer move only one step at a time. Often used for cycle detection, linked list operations
// or finding a specific element in a data structure.
function findDuplicate(nums) {
    let slow = nums[0];  // Slow pointer starts at the first element
    let fast = nums[0];  // Fast pointer starts at the first element
  
    // Move the pointers until they meet
    do {
      slow = nums[slow];                 // Move slow pointer one step
      fast = nums[nums[fast]];           // Move fast pointer two steps
    } while (slow !== fast);
  
    // Find the entrance of the cycle (duplicate element)
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return fast;  // Return the duplicate element
  }
  
  // Example usage:
  const nums = [1, 2, 8, 3, 1, 12];
  const duplicate = findDuplicate(nums);
  console.log("Duplicate element:", duplicate);