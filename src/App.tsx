import logo from './logo.svg'
import './App.css'
import { Edge, Graph, Vertex } from 'graph'

function App() {
  new Graph({
    directed: false,
    vertices: new Set<Vertex>([0, 1, 2, 3, 4, 5]),
    edges: new Set<Edge>([
      { start: 0, end: 1, weight: 2 },
      { start: 0, end: 2, weight: 4 },
      { start: 1, end: 2, weight: 6 },
      { start: 2, end: 3, weight: 8 },
      { start: 3, end: 4 },
    ]),
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
