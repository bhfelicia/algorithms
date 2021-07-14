class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const currNode = new Node(val);
    if (!this.head) {
      this.head = currNode;
      this.tail = currNode;
    } else {
      this.tail.next = currNode;
      this.tail = currNode;
    }
    ++this.length;
    return this;
  }
}
