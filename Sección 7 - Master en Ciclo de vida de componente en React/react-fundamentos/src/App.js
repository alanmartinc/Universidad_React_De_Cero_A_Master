import React, { Component } from 'react'

// El metodo render
const getList = () => {
  return(
    <ul>
      <li>Fresa</li>
      <li>Sandia</li>
      <li>Mango</li>
    </ul>
  )
}

class App extends Component {
  render() {
    return(
      <div>
        <h1>Metodo render</h1>
        {getList()}
      </div>
    )
  }
}

export default App