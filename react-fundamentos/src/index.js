import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Alan Cabot'

const user1 = {
  name: 'Alan Cabot',
  age: 24,
  country: 'Argentina'
}

function getInfo (user) {
  return `Hola mi nombre es ${user.name} y soy de ${user.country}`
}

const App = <h1>{ getInfo(user1) }</h1>

ReactDOM.render(App, document.getElementById('root'))