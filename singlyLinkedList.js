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
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const previous = this.get(idx - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;
    --this.length;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    while (node) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
const list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.print();
list.reverse();
list.print();
