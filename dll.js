export class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      node.prev = this.tail;
    }
    this.length++;
  }

  pop() {
    //remove the item from the end of the link list, the last node
    if (this.length == 0) {
      console.log("The DLL is EMPTY. Nothing to POP.");
      return;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }

  getNodeAtIndex(index) {
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  shift() {
    //REMOVE a node from the beginning of the dll
    if (this.length == 0) {
      console.log("The DLL is EMPTY. Nothing to REMOVE.");
      return null;
    } else if (this.length == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
  }

  removeAtIndex(index) {
    //if index is invalid return false
    if (index < 0 || index >= this.length) {
      return false;
    }
    //if index is at beginning use already built shift
    else if (index === 0) return this.shift();
    //if index is at end use already built pop
    if (index === this.length - 1) return this.pop();
    //get before and after, set before's next to after and remove after's reference from removed Node
    const before = this.getNodeAtIndex(index - 1);
    const removedNode = this.getNodeAtIndex(index);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}
