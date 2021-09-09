import { AdjacencyList, AdjacencyMatrix, IGraph } from '.'

export class Graph implements IGraph {
  vertices
  edges
  adjacencyMatrix
  adjacencyList
  directed
  constructor(graph: IGraph) {
    this.vertices = graph.vertices
    this.edges = graph.edges
    this.directed = graph.directed || false
    this.adjacencyMatrix = this.getAdjacencyMatrix()
    this.adjacencyList = this.getAdjacencyList()
    console.log(this)
  }

  getAdjacencyMatrix(): AdjacencyMatrix {
    let A: AdjacencyMatrix = []
    const n = this.vertices.size

    for (let i = 0; i < n; i++) {
      A.push([])
      for (let j = 0; j < n; j++) A[i][j] = 0
    }
    this.edges.forEach(({ start, end, weight }) => {
      A[start][end] += weight || 1
      if (!this.directed) A[end][start] += weight || 1
    })

    return A
  }

  getAdjacencyList(): AdjacencyList {
    let A: AdjacencyList = []
    const n = this.vertices.size

    for (let i = 0; i < n; i++) {
      A.push([])
      for (let j = 0; j < n; j++) {
        this.adjacencyMatrix[i][j] && A[i].push({ vertex: j, weight: this.adjacencyMatrix[i][j] })
      }
    }

    return A
  }
}
