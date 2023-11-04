const longestConsecutive = function(nums = [-6,-1,-1,9,-8,-6,-6,4,4,-3,-8,-1]) {    
    if (nums.length == 0) return [];
    const setValues = new Set(nums.sort((a, b) => a - b));
    const arrayFromSet = Array.from(setValues);

    let counter = 1;
    let maxCounter = 1;
    for (let i = 0; i < arrayFromSet.length; i++) {
        if (arrayFromSet[i] == (arrayFromSet[i - 1] + 1)) {
            counter = counter + 1;
            maxCounter = Math.max(maxCounter, counter)
        }
        else {
            counter = 1;
        }
    }

    return maxCounter;
};

console.log(longestConsecutive());


[7,2 ,1, 3, 6, 9, 12, 13, 15, 14, 14] // set

[1, 2, 3, 6, 7, 9, 12, 13, 14, 15]

