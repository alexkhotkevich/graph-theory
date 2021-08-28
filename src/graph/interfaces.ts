export interface IGraph {
  vertices: Set<Vertex>
  edges: Set<Edge>
  directed?: boolean
  adjacencyMatrix?: AdjacencyMatrix
  adjacencyList?: AdjacencyList
}

export type AdjacencyMatrix = number[][]
export type AdjacencyList = Array<Array<AdjacencyListItem>>
export type AdjacencyListItem = { vertex: Vertex; weight: number }
export type IncidenceMatrix = number[][]
export type Vertex = number
export type Edge = { start: number; end: number; weight?: number }
