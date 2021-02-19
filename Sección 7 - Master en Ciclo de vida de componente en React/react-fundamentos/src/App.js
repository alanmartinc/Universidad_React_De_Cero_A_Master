import React, { Component } from 'react'

// El metodo constructor
class Contador extends Component {
  constructor(props) {
    super(props)

    this.agregar = this.agregar.bind(this)

    this.title = React.createRef()

    this.state = {
      num: this.props.num
    }
  }

  agregar() {
    console.log(this.title)

    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render() {
    return(
      <div>
        <h2 ref={this.title}>{this.state.message}</h2>
        <button onClick={this.agregar}>
          Click({this.state.num})
        </button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <h1>Metodo constructor</h1>
        <Contador num={1200}/>
      </div>
    )
  }
}

export default App