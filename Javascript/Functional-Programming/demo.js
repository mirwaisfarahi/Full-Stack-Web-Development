const validPlindrome = (s = "0P") => {
    if(s.length === 0) return true;

    let arr = [];
    for(let char of s) {
        if(/[0-9a-zA-Z]/.test(char)) arr.push(char.toLowerCase());
    }

    let first = 0;
    let last = arr.length - 1;
    while(first < last) {
        arr[first] !== arr[last] ? false : (first++, last--);
    }

    return true;

}

console.log(validPlindrome())