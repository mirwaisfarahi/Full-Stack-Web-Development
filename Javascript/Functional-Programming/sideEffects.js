// Side Effect Example
let counter = 0;

function incrementCounter() {
  counter++;
}

console.log(counter); // 0
incrementCounter();
console.log(counter); // 1 (side effect occurred)

let total = 0;

// Impure function with side effect
function addToTotal(amount) {
  total += amount;
  return total;
}

// Pure function with no side effects
function addToTotalPure(previousTotal, amount) {
    return previousTotal + amount;
}

let newTotal = addToTotalPure(total, 5);
console.log(newTotal); // 5

newTotal = addToTotalPure(newTotal, 10);
console.log(newTotal); // 15
