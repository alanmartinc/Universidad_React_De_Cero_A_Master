import React, { Component } from 'react'

// Manejando (inputs no controlados) con Refs
const Unicorn = () => (
  <span role="img" aria-label="unicornio">🦄</span>
)

class InputNoControlado extends Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value
    const email = this.email.current.value

    // Manejo de datos
    this.props.onSend({nombre, email})
  }

  render() {
    return(
      <div>
        <input type="text" ref={this.nombre} placeholder="Nombre"></input>
        <input type="text" ref={this.email} placeholder="Email"></input>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    )
  }
}

class App extends Component {
  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs no controlados Refs <Unicorn/>
          <InputNoControlado onSend={this.send}/>
        </h1>
      </div>
    )
  }
}

export default App