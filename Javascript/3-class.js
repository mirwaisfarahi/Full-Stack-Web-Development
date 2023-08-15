//1.  You can use this class to represent how classy someone or something is. "Classy" is interchangable with "fancy".
// If you add fancy-looking items, you will increase your "classiness". Create a function in "Classy" that takes a string as input and adds it to the "items"
// list. Another method should calculate the "classiness" value based on the items. The following items have classiness points associated with them:
// "tophat" = 2
// "bowtie" = 4
// "monocle" = 5
// Everything else has 0 points.

class Classy {
    constructor() {
        this.items = [];
    }

    addItem(str) {
        return this.items.push(str);
    }

    getClassiness() {

        const counter = [];

        this.items.map(item => {
            if(item === "tophat") counter.push(2);
            if(item === "bowtie") counter.push(4);
            if(item === "monocle") counter.push(5);
        });

        return counter.reduce((total, currentVal) => total+currentVal, 0);
    }

}

const me = new Classy();
me.addItem("tophat");
me.addItem("bowtie");
me.addItem("monocle");

console.log(me)
console.log(me.getClassiness());

/** 2. Write a function called "show_excitement" where the string
"I am super excited for this course!" is returned exactly 5 times, where each sentence is separated by a single space.
Return the string with "return". You can only have the string once in your code. Don't just copy/paste it 5 times into a single variable! **/

function show_excitement(str) {
    str = str + " ";
    return str.repeat([5]);
}

console.log(show_excitement("I am super excited for this course!"));

/**
3. The LinkedList code from before is provided below. Add three functions to the LinkedList. "get_position" returns the element at a certain position.
The "insert" function will add an element to a particular spot in the list and "delete" will delete the first element with that particular value.
 */

// Solution:
// 1. create linked list node element
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    // insert at last
    append(data) {
        let current;

        const node = new Node(data);

        if(this.head == null) {
            this.head = node;
            this.head.next = null;
        }

        else {
            current = this.head;

            while(current.next != null) {
                current = current.next;
            }

            current.next = node;
        }
    }

    // traverse list
    traverse() {

        let current = this.head;

        while(current != null) {
            console.log(current.value)
            current = current.next;
        }
    }

    // insert at position
    insertAtPosition(data, position = position-1) {
        
        if(position === 0) {
            
        }
    }
}

const a = new LinkedList();
a.append(10)
a.append(4)
a.traverse();

