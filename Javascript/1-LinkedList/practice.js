class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

class LinkedList {
    
    // traverse
    static traverse = (head) => {
        let current = head;

        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    static traverseRecursive = (head) => {
        if(head == null) return
        console.log(head.data)
        this.traverseRecursive(head.next);
    }

    // Append in last
    static append = (head, data) => {
        let current = head;

        while(current.next != null) {
            current  = current.next;
        }
        current.next = new Node(data);
    }
    
    static appendRecursive = (head, data) => {
        if(head.next == null) return head.next = new Node(data);
        this.appendRecursive(head.next, data)
    }

    // prepend
    static prepend = (head, data) => {
        const newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // delete with value
    static deleteWithValue = (head, data) => {
        if(head == null) return
        if(head.data === data) {
            head = head.next;
            return   
        }

        let current = head;
        while(current.next != null) {
            if(current.next.data === data) {
                current.next = current.next.next;
                return
            }
            current = current.next;
        }
    }
}

LinkedList.append(a, 'E');
LinkedList.appendRecursive(a, 'F')
LinkedList.prepend(a, 'G');
LinkedList.deleteWithValue(a, 'B');
LinkedList.traverse(a);
