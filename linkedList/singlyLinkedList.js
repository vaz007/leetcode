/**
 * Singly Linked List
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
  // Split the list into two halves
  splitList(head) {
    if (!head || !head.next) return { left: head, right: null };

    let slow = head,
      fast = head,
      prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null; // Split the list into two parts

    return { left: head, right: slow };
  }

  // Recursive merge sort implementation
  mergeSort(head, comparator) {
    if (!head || !head.next) return head;

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
  deleteSpecificNode(data) {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }
    if (current) {
      prev.next = current.next;
      this.length--;
    }
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
    this.head = this.mergeSortedLists(this.head, anotherList.head, (a, b) => a - b);
    return this;
} // Merge two singly linked lists into one
  getMiddleNode() {
    //Find the middle node of the list (using the two-pointer approach)
    let middle = Math.floor(this.length / 2);
    let current = this.head;
    for (let i = 0; i < middle; i++) {
      current = current.next;
    }
    return current.data;
  }
  detectCycle() {
    // Check if the linked list contains a cycle. This is a critical algorithm question that uses the Floyd’s Cycle Detection algorithm (slow and fast pointers).

    // If list is empty or has only one node, no cycle is possible
    if (!this.head || !this.head.next) {
        return false;
    }

    // Initialize two pointers - slow moves one step at a time
    // fast moves two steps at a time
    let slow = this.head;
    let fast = this.head;

    // Move pointers until they meet or fast reaches end
    while (fast && fast.next) {
        // Move slow pointer one step
        slow = slow.next;
        // Move fast pointer two steps
        fast = fast.next.next;

        // If pointers meet, we found a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If we get here, fast reached null, so no cycle
    return false;
  } 
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  } //   Build a linked list from an array for initialization or testing
  toString() {
    //Create a method to return a string representation of the list (e.g., "5 -> 6 -> 7").
    if (!this.head) return null;
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data; // Add the node's data
      if (current.next) {
        str += " -> "; // Add " -> " only if there's a next node
      }
      current = current.next; // Move to the next node
    }
    return str; // Return the formatted string
  }
}

const newList = new singlyLinkedList();
console.log(newList.push(5));
console.log(newList.push(6)); // 5 -> 6
console.log(newList.push(7)); // 5 -> 6
console.log(newList.push(8)); // 5 -> 6

console.log(newList.pop()); // 8
console.log(newList.pop()); // 7
console.log(newList.shift());
console.log(newList.unshift(5));
console.log(newList.push(7));
console.log(newList.getSize()); // 3

console.log(newList.deleteSpecificNode(7));
console.log(newList.push(7));
console.log(newList.push(8));
console.log(newList.push(9));

console.log(newList.toString());
console.log(newList.getMiddleNode());
console.log(newList.toArray());

console.log("REVERSE : ");
console.log(newList.reverse());
console.log(newList.toArray());

console.log("Before sorting:", newList.toArray());

newList.sort((a, b) => a - b); // Ascending order
console.log("After sorting (asc):", newList.toArray());

newList.sort((a, b) => b - a); // Descending order
console.log("After sorting (desc):", newList.toArray());

const newList2 = new singlyLinkedList();
console.log(newList2.push(1));
console.log(newList2.push(2));
console.log(newList2.push(3));

// Print both the list
console.log(newList.toArray());
console.log(newList2.toArray());
console.log(newList.merge(newList2));

console.log(newList.detectCycle());


// Create a cycle in the list
let current = newList.head;
while (current.next) {
    current = current.next;
}
current.next = newList.head.next;  // Point last node to second node

console.log("After creating cycle:", newList.detectCycle()); 