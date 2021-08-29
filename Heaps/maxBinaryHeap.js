//can use an array to store a binary heap
//for any index n, the left child is stored at 2n + 1, right child is stored at 2n + 2
//for any index n, its parent is at index Math.floor((n-1)/2)
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(num) {
    this.values.push(num);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const oldMax = this.values.pop();
    this.sinkDown();
    return oldMax;
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
        if (left > elem) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap === null && right > elem) ||
          (swap !== null && right > left)
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

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
console.log(heap.extractMax());
console.log(heap);
