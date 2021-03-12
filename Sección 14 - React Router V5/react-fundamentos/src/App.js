import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Props disponibles en componente Route
const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/hola/' strict component={Hola}/>
        <Route path='/productos' sensitive component={Productos}/>
      </BrowserRouter>
    </div>
  )
}

export default App