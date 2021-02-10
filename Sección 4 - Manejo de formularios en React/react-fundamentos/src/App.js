import React, { Component } from 'react'

// Ejemplo de formulario con opciones de Selección Múltiple
const Unicorn = () => (
  <span role="img" aria-label="unicornio">🦄</span>
)

class App extends Component {
  state = {
    techs: ['Vue']
  }

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )

    this.setState({techs})
  }

  render() {
    return(
      <div>
        <h1>Etiqueta Select <Unicorn/></h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App