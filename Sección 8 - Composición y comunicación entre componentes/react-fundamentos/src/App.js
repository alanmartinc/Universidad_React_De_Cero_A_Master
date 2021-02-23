import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// Variables Globales (Cualquiera)
const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return(
    <header style={headerStyles}>
        <div>
          (Cualquiera)
        </div>
        <div style={subtitleStyles}>
          Variables Globales
          <span role="image" aria="flame">
            🔥
          </span>
        </div>
      </header> 
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class Bisnieto extends Component {
  state = {
    massage: '********'
  }

  handleClick = () => {
    this.setState({
      massage: window.title
    })
  }

  render() {
    return(
      <div style={boxStyles}>
        <p>{this.state.massage}</p>
        <button onClick={this.handleClick}>Nieto</button>
      </div>
    )
  }
}

class Nieto extends Component {
  render() {
    return(
      <div style={boxStyles}>
        <Bisnieto/>
      </div>
    )
  }
}

class Hijo extends Component {
  render() {
    return(
      <div style={boxStyles}>
        <Nieto/>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount () {
    window.title = 'React es cool!!'
  }

  handleClick = () => {
    window.title = '##########'
  }

  render() {
    return(
      <div style={boxStyles}>
        <button onClick={this.handleClick}>
          Padre
        </button>
        <Header/>
        <Hijo/>
      </div>
    )
  }
}

export default App