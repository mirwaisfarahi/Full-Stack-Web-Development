// Stack Challenges
// 1. Find minimum in slack
class Stack {

    constructor() {
        this.items = [];
    }

    push(number) {
        // your code here
        this.items.push(number)
    }

    pop() {
        // your code here
        return this.items.pop();
    }

    min() {
        // your code here
        return Math.min.apply(null, this.items)
    }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
  // => 3
