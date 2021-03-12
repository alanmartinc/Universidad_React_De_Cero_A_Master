import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Instalación de React Router y montando primeras rutas
const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/hola' component={Hola}/>
      
      <section>
        <Route path='/productos' component={Productos}/>
      </section>
      
      <div>
        <Route path='/productos' component={Productos}/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App