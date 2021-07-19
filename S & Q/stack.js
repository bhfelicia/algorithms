class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const oldFirst = this.first;
    if (!this.first.next) {
      this.first = null;
      this.last = null;
    } else {
      const newFirst = this.first.next;
      this.first = newFirst;
      oldFirst.next = null;
    }
    --this.size;
    return oldFirst.value;
  }
}
