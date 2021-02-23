import React, { Component } from 'react'

// Comunicación Event Bubbling (Hijo a Padre)
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
          (Hijo a Padre)
        </div>
        <div style={subtitleStyles}>
          Event Bubbling
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

class Hijo extends Component {
  handleClick = (e) => {
    // e.stopPropagation()
    e.saludo = 'Hola mensaje desde el Hijo'
    console.log('Click en Hijo')
  }

  render() {
    return(
      <div style={boxStyles} onClick={this.handleClick}>
        <p>Hijo</p>
      </div>
    )
  }
}

class App extends Component {
  handleClick = (e) => {
    console.log('Click en Padre', e.saludo)
  }

  render() {
    return(
      <div style={boxStyles} onClick={this.handleClick}>
          <Header/>
          <Hijo/>
      </div>
    )
  }
}

export default App