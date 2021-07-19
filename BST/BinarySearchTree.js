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
}
