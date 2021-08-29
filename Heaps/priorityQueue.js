//priority queue is an ADT that can be solved with heap DS
//Priority queue can often be a min heap - lower number is higher priority
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const elem = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (elem.priority >= parent.priority) break;
      [this.values[parentIdx], this.values[index]] = [
        this.values[index],
        this.values[parentIdx],
      ];
      index = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const { length } = this.values;
    const elem = this.values[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let left, right;
      let swap = null;

      if (leftChildIdx < length) {
        left = this.values[leftChildIdx];
        if (left.priority < elem.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap === null && right.priority < elem.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}
const ER = new PriorityQueue();
ER.enqueue("cold", 5);
ER.enqueue("wound", 1);
ER.enqueue("fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
