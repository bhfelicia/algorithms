//when using queue ADT with array, can either
//combine push and shift (add to end, remove from beginning), or
//combine unshift and pop (add to beginning, remove from end)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//for linked list implementation, better to add to end and remove from beginning
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const oldFirst = this.first;
    this.first = this.first.next;
    oldFirst.next = null;
    --this.size;
    return oldFirst.value;
  }
}
