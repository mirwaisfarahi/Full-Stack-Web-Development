// Create Linked List: We store linkedList in a form of object in memory
// Example: 10 -> 16 -> 20
const LinkedList2 = {
    head: {
        value: 10,
        next: {
            value: 16,
            next: {
                value: 20,
                next: null
            }
        }
    }
}

console.log(LinkedList2);

class LinkedList {
    // Class always use constroctor to define itself
    constructor(data) {
        // always use this keyword to refer to the class property. Create head object
        this.head = {
            value: data,
            next: null
        }
        // head and tail are on same node
        this.tail = this.head;
        this.length = 1;
    }

    // Add aother nodes to the list
    append(data) {
        // We create a node as an object
        const newNode = {
            value: data,
            next: null
        }
        // console.log(newNode) // return { value: 16, next: null }
        this.tail.next = newNode; // LinkedList {
        // head: { value: 10, next: { value: 16, next: null } },
        // tail: { value: 10, next: { value: 16, next: null } },
        // length: 1
        // }
        // We can see that tail is an object with value 10 (from head) and 16. we need to move tail to last
        this.tail = newNode;
        this.length++;
    }
}

const myList = new LinkedList(10);
myList.append(16);
console.log(myList)
// return LinkedList {
//   head: { value: 10, next: { value: 16, next: null } },
//   tail: { value: 16, next: null },
//   length: 2
// }
myList.append(20);
console.log(myList)
// return 
// LinkedList {
//   head: { value: 10, next: { value: 16, next: [Object] } },
//   tail: { value: 20, next: null },
//   length: 3
// }


// Advance: Linked List Creation
// 1. As we know it is a collection nodes, then first create a node using OOP
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Example: Data: A,B,C,D
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// 2. Now lets link all the nodes which is a list of data. Each object has a property of val and next.
a.next = b;
b.next = c;
c.next = d;
// d.next is already set to null by default

// Examples:

// 1. traverse and print the linked list which will start from head. In our case it is object a
const printLinkedList = (head) => {
    let current = head;

    // A -> B -> C -> D -> null (current = A, and so on)
    while (current !== null) {
        // console.log(current) it will print each node value and next node reference
        console.log(current.val)
        current = current.next;
    }
}

printLinkedList(a);

// LinkedList traverse method using recursion algorithm
const printLinkedListRecursion = (head) => {
    if (head === null) return
    console.log(head.val)
    printLinkedListRecursion(head.next)
}

printLinkedListRecursion(a);

// 2. push the linked list elements to an array
// using iterative method
const pushLinkedListElements = (head) => {

    // define an empty array
    const values = [];

    // current pointer
    let current = head;

    while (current !== null) {
        values.push(current.val)

        current = current.next;
    }

    return values;
}

console.log(pushLinkedListElements(a))

// using recursion method
const pushLinkedListElementsRecursion = (head) => {
    let values = [];
    pushValues(head, values);

    return values;
}

const pushValues = (head, values) => {
    if (head === null) return
    values.push(head.val);
    pushValues(head.next, values);
}

console.log(pushLinkedListElementsRecursion(a))

// 3. To sum up all node values
const nodeTotal = (head) => {
    let sum = 0;
    let current = head;

    while (current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
}

// using recursion method
const nodeTotalRecursion = (head) => {
    if (head === null) return 0
    return head.val + nodeTotalRecursion(head.next)
}

const num1 = new Node(2);
const num2 = new Node(5);
const num3 = new Node(10);

num1.next = num2;
num2.next = num3;

console.log(nodeTotal(num1))
console.log(nodeTotalRecursion(num1))


// 4. linked list find: find the target element in the linked list
// using iterative method
const linkedListFind = (head, target) => {

    let current = head;
    let result = false;
    while (current !== null) {
        if (current.val === target) {
            result = true;
            break;
        }
        current = current.next;
    }
    return result;
};

// using recursion method
const linkedListFindRecursion = (head, target) => {

    if (head === null) return false
    if (head.val === target) return true;
    return linkedListFindRecursion(head.next, target)
}

console.log(linkedListFind(a, 'B'));
console.log(linkedListFindRecursion(a, 'B'));

/** 6. get node value:
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.
If there is no node at the given index, then return null.
 */
// using iterative method
const getNodeValue = (head, index) => {
    let current = head;
    let counter = 0;
    // while(counter !== index) {
    //     current = current.next;
    //     counter += 1;
    // }
    // return current.val;

    // The above method will not work in case we pass an index grater than the linked list size. Example: index = 8. Then it will loop till index 8 and error.
    // we can do the following
    while (current !== null) {
        if (counter === index) return current.val
        current = current.next;
        counter += 1;
    }
    return null; // in case node index is not found. it will return null
};

// using recursion method
const getNodeValueRecursion = (head, index) => {

    if (head === null) return null
    if (index === 0) return head.val;
    return getNodeValueRecursion(head.next, index - 1)
}

console.log(getNodeValue(a, 8)) // return null
console.log(getNodeValue(a, 0)) // return A

console.log(getNodeValueRecursion(a, 8)) // return null
console.log(getNodeValueRecursion(a, 0)) // return A

/**
  7. Reverse the list: A -> B -> C -> D -> null
 */
const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    printReverseList(prev);
}

// using recursion method
const reverseListRecursive = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    prev = head;
    return reverseListRecursive(next, prev)
}

const printReverseList = (node) => {
    while (node != null) {
        console.log(node.val);
        node = node.next;
    }
}

reverseList(a) // return reverse order D to A
console.log(reverseListRecursive(a))

// 8. Zipper Lists

const zipperLists = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;

    while(current1 != null && current2 != null) {
        let next1 = current1.next;
        let next2 = current2.next;

        current1.next = current2;
        current2.next = next1;
        
        current1 = next1;
        current2 = next2;
    }

    return head1;
}

const x = new Node("x");
const w = new Node("w");
const y = new Node("y");
const z = new Node("z");
x.next = w;
w.next = y;
y.next = z;
// x -> w -> y -> z

console.log(zipperLists(a, x))