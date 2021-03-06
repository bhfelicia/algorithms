class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    --this.length;
    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    --this.length;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.length;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let counter, current;
    if (idx <= middle) {
      counter = 0;
      current = this.head;
      while (counter < idx) {
        ++counter;
        current = current.next;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter > idx) {
        --counter;
        current = current.prev;
      }
    }
    return current;
  }
  set(idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const afterNode = prevNode.next;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    ++this.length;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const node = this.get(idx);
    const beforeNode = node.prev;
    const afterNode = node.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    node.next = null;
    node.prev = null;
    --this.length;
    return node;
  }
}
