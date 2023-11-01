const uncommonFromSentences = (s1 = "this apple is sweet", s2 = "this apple is sour") => {
    
    // use hash table => frequency counter and object/set
    const wordCounter = {};

    // add array to store the result
    const result = [];

    const arr1 = s1.split(' ');
    const arr2 = s2.split(' ');

    for(let val of arr1) {
        wordCounter[val] = (wordCounter[val] || 0) + 1;
    }

    for(let val of arr2) {
        wordCounter[val] = (wordCounter[val] || 0) + 1;
    }

    for(key in wordCounter) {
        if(wordCounter[key] == 1) result.push(key)
    }

    return result;
}

console.log(uncommonFromSentences())