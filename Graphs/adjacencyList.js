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
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const helper = (vtx) => {
      if (!vtx) return null;
      visited[vtx] = true;
      result.push(vtx);
      for (let i = 0; i < adjacencyList[vtx].length; i++) {
        const curr = adjacencyList[vtx][i];
        if (!visited[curr]) {
          return helper(curr);
        }
      }
    };
    helper(start);
    return result;
  }
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    while (queue.length) {
      const vtx = queue.shift();
      result.push(vtx);
      visited[vtx] = true;
      this.adjacencyList[vtx].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex(2);
g.addVertex(3);
g.addVertex(5);
g.addVertex(9);

g.addEdge(2, 3);
g.addEdge(5, 9);
g.addEdge(9, 2);
g.addEdge(3, 5);

console.log(g.bfs(2));

//vertex = node
//edge = connection between nodes
//weighted/unweighted
//each edge has no val associated with it, but when assign val to edges, becomes weighted graph - info abt connection
//google maps -> directed, weighted graph - value assigned to edges
//directed/undirected
//directed - nodes have polarity
//edges represent connections and vertices represent points on a plane
//weighted graph has value edges represent.
//depth-first traversal - visit children before siblings - moving away from root
//must remember where we've been - keep track so we don't go in circles
