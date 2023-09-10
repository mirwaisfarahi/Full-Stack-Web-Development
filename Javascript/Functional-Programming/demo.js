const square = val => val * 2;
const triple = val => val * 3;

const operation = [
    square,
    triple
];

let number = 10;

const middleware = num => {
    operation.forEach(element => {
        num = element(num);
    });
    return num;
}

console.log(middleware(number));
 