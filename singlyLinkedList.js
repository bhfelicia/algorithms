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
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    --this.length;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.length;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let currIdx = 0;
    let current = this.head;
    while (currIdx < idx) {
      ++currIdx;
      current = current.next;
    }
    return current;
  }
  set(idx, value) {
    const node = this.get(idx);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
}
