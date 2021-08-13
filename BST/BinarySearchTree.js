class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(num, root = this) {
    const newNode = new BinarySearchTree(num);
    ++this.magnitude;
    if (num < root.value && !root.left) {
      root.left = newNode;
      return;
    }
    if (num < root.value && root.left) {
      return root.left.insert(num, root.left);
    }
    if (num >= root.value && !root.right) {
      root.right = newNode;
      return;
    }
    if (num >= root.value && root.right) {
      return root.right.insert(num, root.right);
    }
  }
  find(val) {
    let curr = this;
    while (curr) {
      if (curr.value === val) return true;
      if (val < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
  bfs() {
    const queue = [this];
    const visited = [];
    while (queue.length) {
      const curr = queue.shift();
      visited.push(curr);
      if (curr.left) {
        queue.unshift(curr.left);
      }
      if (curr.right) {
        queue.unshift(curr.right);
      }
    }
    return visited;
  }
}
