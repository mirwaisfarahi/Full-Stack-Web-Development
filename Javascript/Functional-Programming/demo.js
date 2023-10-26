var isAnagram = function(s = "nnagram", t = "nagaram") {
    // s = s.split('');
    // t = t.split('');
    // first check the length is same for both strings
    if(s.length !== t.length) return false;

    // use frequency counter method: use of object/set to store frequency value
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let val of s) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of t) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) return false;

        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true;
};
console.log(isAnagram())
