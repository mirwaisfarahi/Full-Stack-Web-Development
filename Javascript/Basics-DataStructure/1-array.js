// Array
// USE AN ARRAY TO STORE A COLLECTION OF DATA
// 1. one-dimensional array: it is a simple form of array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray);
console.log(simpleArray.length);

// 2. Multi-dimensional array: a complex array
let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        },
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

console.log(complexArray)


// ACCESS AN ARRAY'S CONTENTS USING BRACKET NOTATION
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];

// set new value to array in the same way
ourArray[1] = "Not b anymore";


// ADD ITEMS TO AN ARRAY WITH PUSH() AND UNSHIFT()
// 1. push() => add element to the end of array
const pushArray = [1, 2, 3];
pushArray.push(4);

//2. unshift() => add element to the beginning of array
pushArray.unshift(0)


// REMOVE ITEMS FROM AN ARRAY WITH POP() AND SHIFT()
//1. pop() => remove element from the end of array
pushArray.pop()

//2. shift() => remove element from the beginning of array
pushArray.shift()


// REMOVE ITEMS USING SPLICE()
// It remove any number of consecutive elements from anywhere in array
const result = pushArray.splice(0,2); // here we remove two elements beginning with index-0
console.log(result); // not only remove elements but return the removed elements as well. Here [3]

// ADD ITEMS USING SPLICE()
// Remember that splice() can take upto three parameters. the third one is comprised of one of more elements to add to array.
// This can be incredibly useful for quickly swithcing out an element, or a set of elements.
const numbers = [10,11,12,12,15];
const startIndex = 3;
const ammountToDelete = 1;

numbers.splice(startIndex, ammountToDelete, 13, 14);  // it remove 4th index and add two more values.


// COPY ARRAY ITESM USING SLICE()
// Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, 
// leaving the array it is called upon untouched.
const weatherCondition = ['rain', 'snow', 'sleet', 'hail', 'clear']
let todaysWeather = weatherCondition.slice(1, 3); // this will return  ['snow', 'sleet']


// COPY AN ARRAY WITH THE SPREAD OPERATOR
// It is ... to copy entire array to new one. It is feature of ES6
let thisArray = [true, false, undefined, null];
let thatArray = [...thisArray]; // copy thisArray to thatArray

// COMBINE ARRAYS WITH THE SPREAD OPERATOR
let newArray = ['txt', 12, ...thisArray, 4.3]


// CHECK FOR THE PRESENNCE OF AN ELEMENT WITH INDEXOF()
// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be 
// on a given array. Luckily, JavaScript provides us with another built-in method, indexOf(),
// that allows us to quickly and easily check for the presence of an element on an array. 
// indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
let fruits = ['apples', 'pears', 'oranges', 'peaches'];
fruits.indexOf('dates'); // return -1
fruits.indexOf('pears'); // return 1


// ITERATE THROUGH ALL ELEMENTS OF AN ARRAY USING LOOP
// Built-in methods are every(), forEach(), map() but most flexible is for loop

const greatThanTen = (arr) => {
    const newArray = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > 10) newArray.push(arr[i]);
    }

    return newArray;
}

console.log(greatThanTen([2,5,10,12,5,19])) // return [ 12, 19 ]


// CREATE COMPLEX MULTI-DEMINSIONAL ARRAYS
const nestedArray = [
    ['deep'],
    [
        ['deeper-1'], ['deeper-2']
    ],
    [
        [
            'deeper-3', [
                ['deepest']
            ]
        ]
    ]
];

console.log(nestedArray[1][0]) // ['deeper-1']

let nestedArray2 = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

console.log(nestedArray2[2][1][0][0]) // print ['deepest-est?']
console.log(nestedArray2[2][1][0][0][0]) // print array value deepest-est?

