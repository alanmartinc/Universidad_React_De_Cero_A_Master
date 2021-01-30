import React from 'react'
import ReactDOM from 'react-dom'

const user1 = {
    name: 'Alan Cabot',
    age: '24',
    country: 'Argentina'
}

function getInfo (user) {
    return `Hola mi nombre es ${user.name} y soy originario de ${user.country}`
}

const App = <h1>Hello {user1.name}, tu edad es {user1.age} años y vivis en {user1.country}. <br></br> {getInfo(user1)}</h1>

ReactDOM.render(App, document.getElementById('root'))