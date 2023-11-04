const longestConsecutive = function(nums = [9,1,4,7,3,-1,0,5,8,-1,6]) {    
    if (nums.length == 0) return [];
    const setValues = new Set(nums.sort((a, b) => a - b));
    const sequenceCounter = [];
    let counter = 1;

    for (let i = 0; i < setValues.length; i++) {
        if (setValues[i] == (setValues[i - 1] + 1)) {
            counter = counter + 1;
            sequenceCounter.push(counter);
        }
        else {
            counter = 1;
        }
    }

    return sequenceCounter;
};

console.log(longestConsecutive());