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

    getNodeAtIndex(index) {
        let counter = 0;
        let current = this.head;
        
        while(counter < index) {
          current = current.next;
          counter++;
        }
        return current;
      }
      
}

