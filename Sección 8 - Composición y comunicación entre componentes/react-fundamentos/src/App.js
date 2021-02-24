import React, { Component } from 'react'
import propTypes from 'prop-types'

// Ejemplo HOC con opciones de configuración
const {Provider, Consumer} = React.createContext()

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
          (Hijo ↔️ Padre)
        </div>
        <div style={subtitleStyles}>
        HOC High Order Component
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

// HOC
const withCounter = (Comp) => {
  return (config) => class extends Component {
    state = {
      num: config.clicks
    }

    add = () => {
      this.setState(state => ({
        num: state.num + config.sumClicks
      }))
    }

    render() {
      return(
        <Comp num={this.state.num} add={this.add}/>
      )
    }
  }
}

class App extends Component {
  render() {
    const {num, add} = this.props

    return(
      <div style={boxStyles}>
        <Header/>
        <h1>{num}</h1>
        <button onClick={add}>
          ADD
        </button>
      </div>
    )
  }
}

export default withCounter(App) ({
  clicks: 10,
  sumClicks: 3
})