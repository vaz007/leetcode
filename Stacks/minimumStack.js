/** STACK
A stack is a linear data structure that operates on the principle of Last In, First Out (LIFO). 
This means the last element added to the stack is the first one to be removed. It is analogous to a stack of plates: 
you add plates to the top and remove plates from the top.
    push(val) {}
    pop() {}
    top() {}
    getMin() {}
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val) {
        if(!this.head) {
            this.head = new Node(val);
            this.tail= this.head;
            this.length++;
        } else {
            let newNode = new Node(val);
            while(this.tail.next !== null) {
                this.tail = this.tail.next;
            }
            this.tail.next = newNode;
            this.length++;
        }
    return this;
    }
    pop() {
        if(!this.head) return null;
        let current = this.head;
        let prev = null;
        while(current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return this;

    }

    getTop() {
        return this.tail.val;
    }
    getMin() {
        if(!this.head) return null;
        let min = Infinity;
        let current = this.head
        while(current.next) {
            min = Math.min(min, this.head.val);
            current = this.head.next;
        }
        return min;
    }

}

const list = new Stack();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
// console.log(list.push(4));
// console.log(list.push(5));
// console.log(list.pop());
console.log(list.pop());
console.log(list.getTop());
console.log(list.getMin());