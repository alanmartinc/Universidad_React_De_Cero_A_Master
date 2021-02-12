import React, { Component } from 'react'

// Manejo y limite de errores dentro de componentes
class Boton extends Component {
  state = {
    dispararError: false
  }

  dispachError = () => {
    this.setState({dispararError: true})
  }

  render() {
    if(this.state.dispararError){
      throw new Error('Lo siento he fallado')
    }

    return(
      <button onClick={this.dispachError}>
        Boton con Bugg
      </button>
    )
  }
}

class LimiteErrores extends Component {
  state = {
    tieneError: false
  }

  componentDidCatch() {
    this.setState({tieneError: true})
  }

  render() {
    if(this.state.tieneError) {
      return(
        <div>
          Wops! Algo ha salido mal, puedes recargar o contactar con el equipo de soporte.
        </div>
      )
    }

    return this.props.children
  }
}
class App extends Component {
  render() {
    return(
      <div>
        <LimiteErrores>
          <Boton/>
        </LimiteErrores>
      </div>
    )
  }
}

export default App