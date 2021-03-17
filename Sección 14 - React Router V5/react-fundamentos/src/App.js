import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Usando el componente Switch
const Home = () => (
  <h1>Home</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const Playlist = () => (
  <h1>Playlist</h1>
)

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home}/>
        <Route path='/videos' render={Videos}/>
        <Route path='/videos' render={Playlist}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App