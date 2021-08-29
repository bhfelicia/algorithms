class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let g = new Graph();
