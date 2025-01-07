class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
      this.length++;
    } else { 
      while(this.tail.next !== null) {
        this.tail = this.tail.next
      }
      this.tail.next = new Node(data);
      this.length++;
      return this;
    }
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
  shift() {
    if(!this.head) return null;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return this;
  }
  unshift(data) {
    if(!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
      this.length++;
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }
  size() {
    return this.length;
  }
  getMiddleNode() {
    const middle = Math.floor(this.length / 2);
    let current = this.head;
    for (let i = 0; i < middle; i++) {
      current = this.head.next
    }
    return current.data
  }
  deleteSpecificNode(data) {
    if(!this.head) return null;
    let current = this.head;
    let prev = null;
    while(current && current.data !== data) {
      prev = current;
      current = current.next;
    }
    if(current) {
      prev.next = current.next;
      this.length--;
    }
    return this;
  }
  // sorting helper methods
  splitList(head){
    if(!head || !head.next) return {left: head, right: null};
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next){
       prev = slow;
      slow = slow.next;
      fast = fast.next.next;  
    }
    prev.next = null; // split list into two parts 
    return {left: head, right: slow};
  }
  mergeSortedLists(left, right, comparator){
    if(!left) return right;
    if(!right) return left;
    if(comparator(left.data, right.data) <= 0){
      left.next = this.mergeSortedLists(left.next, right, comparator);
      return left
    } else {
      right.next = this.mergeSortedLists(left, right.next, comparator);
      return right;
    }
  }
  mergeSort(head, comparator){
    if (!head || !head.next) return head;
    let {left, right} = this.splitList(head);
    let leftSorted = this.mergeSort(left, comparator);
    let rightSorted = this.mergeSort(right, comparator);
    return this.mergeSortedLists(leftSorted, rightSorted, comparator);
  }
  sort(comparator) {
    this.head = this.mergeSort(this.head, comparator);
    return this;
  }
  reverse() {
    if (!this.head) return null;
    let curr = this.head;
    let prev = null;
    let next;
    // 1, 2, 3, 4, 5
    while (curr !== null) {
      next = curr.next; // 2
      curr.next = prev; // null
      prev = curr; // 1
      curr = next; // 2
    }

    // update the head
    this.head = prev;

    return this.head;
  }
  merge(anotherList) {
    this.mergeSortedLists(this.head, anotherList.head, (a, b) => a - b);
    for (let i = 0; i < anotherList.length; i++) {
      this.length++
    }
    return this
  }
  toString() {
    let current = this.head;
    let str = '';
    while(current) {
      str += current.data + ' -> ';
      current = current.next;
    }
    str += 'null';
    console.log(str);
  }
  toArray() {
    let current = this.head;
    let arr = [];
    while(current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr
  }
  
}

const list = new singlyLinkedList();
// push
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
console.log(list.push(5));
// pop
console.log(list.pop());
// shift
console.log(list.shift());
// unshift
console.log(list.unshift(1));
// size
console.log(list.size());
// Middle Node
console.log(list.getMiddleNode());
// Delete Specific Node
console.log(list.deleteSpecificNode(3));
console.log(list.deleteSpecificNode(2));
// Push the elements 
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(5));
// sort
console.log(list.sort((a,b) =>a-b ));

// new List 
const list2 = new singlyLinkedList();
console.log(list2.push(11));
console.log(list2.push(22));
console.log(list2.push(33));
console.log(list2.push(44));
console.log(list2.push(55));
console.log(list.merge((list2)));
console.log(list.toString());
console.log(list.toArray());
