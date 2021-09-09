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
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacenceyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
//vertex = node
//edge = connection between nodes
//weighted/unweighted
//each edge has no val associated with it, but when assign val to edges, becomes weighted graph - info abt connection
//google maps -> directed, weighted graph - value assigned to edges
//directed/undirected
//directed - nodes have polarity
//edges represent connections and vertices represent points on a plane
//weighted graph has value edges represent.
