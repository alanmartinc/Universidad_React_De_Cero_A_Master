import React, { Component } from 'react'

// Ejemplo de Input Checkbox
const Unicorn = () => (
  <span role="img" aria-label="unicornio">🦄</span>
)

class App extends Component {
  state = {
    active: true
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked
    })
  }

  render() {
    const {active} = this.state
    return(
      <div>
        <form>
          <input
            type="checkbox"
            checked={active}
            onChange={this.handleChange}  
          />
        </form>
        {active && (
          <h1>Etiqueta Checkbox <Unicorn/></h1>
        )}
      </div>
    )
  }
}

export default App