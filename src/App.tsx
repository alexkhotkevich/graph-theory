import { Edge, Graph, Vertex } from 'graph'
import React from 'react'
import './App.css'

export function App() {
  const graph = new Graph({
    directed: true,
    vertices: new Set<Vertex>([0, 1, 2, 3, 4, 5, 7]),
    edges: new Set<Edge>([
      { start: 0, end: 1, weight: 2 },
      { start: 0, end: 2, weight: 4 },
      { start: 1, end: 2, weight: 6 },
      { start: 2, end: 3, weight: 8 },
      { start: 3, end: 4 },
    ]),
  })

  const step = (2 * Math.PI) / graph.vertices.size

  return (
    <div className="root">
      <svg height="100vmin" width="100vmin">
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="3" refX="5" refY="1.5" orient="auto">
            <polygon points="0 0, 5 1.5, 0 3" />
          </marker>
        </defs>
        {[...graph.adjacencyList].map((vertex, i) => (
          <React.Fragment key={i}>
            <circle cx={40 * Math.cos(step * i) + 50 + '%'} cy={40 * Math.sin(step * i) + 50 + '%'} r="16" />
            {vertex.map((edge, j) => (
              <line
                key={`${i}${j}`}
                x1={40 * Math.cos(step * i) + 50 + '%'}
                y1={40 * Math.sin(step * i) + 50 + '%'}
                x2={40 * Math.cos(step * edge.vertex) + 50 + '%'}
                y2={40 * Math.sin(step * edge.vertex) + 50 + '%'}
                stroke="orange"
                strokeWidth="5"
                markerEnd="url(#arrowhead)"
              />
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  )
}
