import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App />);