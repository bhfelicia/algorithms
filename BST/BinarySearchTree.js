class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(num, root = this) {
    console.log("INSERTING NEW NUMBER: ", num);
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
  dfsPreOrder(root = this, nodes = []) {
    nodes.push(root.value);
    if (root.left) {
      root.left.dfsPreOrder(root.left, nodes);
    }
    if (root.right) {
      root.right.dfsPreOrder(root.right, nodes);
    }
    return nodes;
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.bfs());
