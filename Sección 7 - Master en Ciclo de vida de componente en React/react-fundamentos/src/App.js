import React, { Component } from 'react'

// El metodo getDerivedStateFromProps
class Contador extends Component {
  state = {
    num: this.props.num
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.num < nextProps.num) {
      return {
        num: nextProps.num
      }
    }
  }

  add = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render() { 
    const {num} = this.state

    return(
      <div>
        <hr/>
        <button onClick={this.add}>
          Clicks ({num})
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    numero: 0
  }

  handleChange = (e) => {
    let numero = parseInt(e.target.value)

    if(isNaN(numero)) {
      numero = 0
    }

    this.setState({numero})
  }

  render() {
    const {numero} = this.state

    return(
      <div>
        <h1>Metodo getDerivedStateFromProps</h1>
        <h2>{numero}</h2>
        <input type="text" onChange={this.handleChange}></input>
        <Contador num={numero}/>
      </div>
    )
  }
}

export default App