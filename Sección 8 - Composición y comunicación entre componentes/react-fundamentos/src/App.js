import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// Observer Pattern (Cualquiera)
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
          Observer Pattern
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
  componentDidMount () {
    PubSub.subscribe('otro evento', (e, data) => {
      this.setState({
        massage: data.title
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe('otro evento')
  }

  handleClick = () => {
    PubSub.publish('saludo', 'Hola desde el Bisnieto')
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
  handleClick = () => {
    PubSub.publish('otro evento', {
      title: 'Hola desde <App/>'
    })
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