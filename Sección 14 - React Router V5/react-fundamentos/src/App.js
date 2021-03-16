import React from 'react'
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import './App.css'

// Props en componentes de ruta
const Hola = () => (
  <h1>Hola</h1>
)

const Productos = (props) => {
  debugger
  return(
    <h1>Productos</h1>
  )
}

const Home = (props) => {
  console.log(props)
  return(
    <h1>Home</h1>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'green' 
}

const Navegation = () => (
  <nav style={navStyles}>
    <NavLink to='/' exact activeStyle={NavActive}>Home </NavLink>
    <NavLink to='/hola' activeClassName='navActive'>Hola </NavLink>
    <NavLink to='/productos' activeStyle={NavActive} isActive={(match, location) => {
      console.log(match)
        if(!match) return false
        return !match.isExact
    }}>Productos </NavLink>
  </nav>
)

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegation/>
            <Route path='/' exact render={Home}/>
            <Route path='/hola/' render={Hola}/>
            <Route path='/productos/:id?' render={Productos}/>
      </BrowserRouter>
    </div>
  )
}

export default App