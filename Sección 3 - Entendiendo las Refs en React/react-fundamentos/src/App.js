import React, { Component } from 'react'

// Reenvío de la prop especial ref con forwardref
const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
))

class App extends Component {
  entrada = React.createRef()

  componentDidMount () {
    console.log(this.entrada)
  }

  render () {

    return (
      <div>
        <FancyInput ref={this.entrada} />
      </div>
    )
  }
}

export default App