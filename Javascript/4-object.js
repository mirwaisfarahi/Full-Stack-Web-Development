// Objects:

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