import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Diferentes formas de renderizar con Route
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

        <Route path='/hola/' strict render={Hola}/>

        <Route path='/productos'>
          {({match}) => {
            if(!match) return(
              <div>
                *** Wops no coincide con /productos
              </div>
            )

            return(
              <Productos/>
            )
          }}
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App