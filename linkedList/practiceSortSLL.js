/**
 * Singly Linked List
 * Design a linked list data structure that supports these operations:
 * 1. Insert a node at the head of the list
 * 2. Insert a node at the end of the list
 * 3. Remove the first node from the list
 * 4. Remove the last node from the list
 * 5. Get the size of the list
 */

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
      while (this.tail.next !== null) {
        this.tail = this.tail.next;
      }
      this.tail.next = new Node(data);
      this.length++;
    }
    return this.head;
  }
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }
  shift() {
    if (!this.head) return null;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return this;
  }
  unshift(data) {
    if (!this.head) {
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
  getSize() {
    return this.length;
  }

  // MERGE SORT ALGORITHM FOR LINKED LIST works best at O(n log n)
  // helper methods
  // Merge two sorted lists based on the comparator
  mergeSortedLists(left, right, comparator) {
    if (!left) return right;
    if (!right) return left;

    if (comparator(left.data, right.data) <= 0) {
        left.next = this.mergeSortedLists(left.next, right, comparator);
        return left;
    } else {
        right.next = this.mergeSortedLists(left, right.next, comparator);
        return right;
    }
  }
  splitList(head) {
    if (!head || !head.next) return {left :head, right:null};
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return {left:head, right:slow};
  }

  mergeSort(head, comparator) {
    if(!head || !head.next) return head;

    const { left, right } = this.splitList(head);

    const sortedLeft = this.mergeSort(left, comparator);
    const sortedRight = this.mergeSort(right, comparator);

    return this.mergeSortedLists(sortedLeft, sortedRight, comparator);
  }

  sort(comparator) {
    //comparator = ascending order (a-b) , descending order(b-a)
    this.head = this.mergeSort(this.head, comparator);
  }

  //
  deleteSpecificNode(data) {}
  reverse() {}
  merge(anotherList) {} // Merge two singly linked lists into one
  getMiddleNode() {} //Find the middle node of the list (using the two-pointer approach)
  detectCycle() {} // Check if the linked list contains a cycle. This is a critical algorithm question that uses the Floyd’s Cycle Detection algorithm (slow and fast pointers).
  toArray() {} // Convert the list to an array for easier debugging or manipulation.
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  } //   Build a linked list from an array for initialization or testing
  toString() {} //Create a method to return a string representation of the list (e.g., "5 -> 6 -> 7").
}

const newList = new singlyLinkedList();
console.log(newList.push(5));
console.log(newList.push(6)); // 5 -> 6
console.log(newList.push(7)); // 5 -> 6
console.log(newList.push(8)); // 5 -> 6

console.log(newList.pop()); // 8
console.log(newList.pop()); // 7
console.log(newList.shift()); // 6
console.log(newList.unshift(10)); // 6

console.log(newList.getSize()); // 2
console.log("Before sorting:", newList.toArray());

newList.sort((a, b) => a - b); // Ascending order
console.log("After sorting (asc):", newList.toArray());

newList.sort((a, b) => b - a); // Descending order
console.log("After sorting (desc):", newList.toArray());
