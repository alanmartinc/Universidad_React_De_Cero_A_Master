import React, { Component } from 'react'

// Ejemplo de formulario con opciones de Selección
const Unicorn = () => (
  <span role="img" aria-label="unicornio">🦄</span>
)

class App extends Component {
  state = {
    tech: 'Vue'
  }

  handleChange = (event) => {
    this.setState({
      tech: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>
          Etiqueta Select <Unicorn/>
          {this.state.tech}
        </h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App