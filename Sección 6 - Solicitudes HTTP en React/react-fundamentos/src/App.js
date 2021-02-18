import React, { Component } from 'react'
import axios from 'axios'

// Usando Async Await para solicitudes HTTP
class App extends Component {
  state = {
    movie: {},
    isFetching: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({isFetching: true})

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    const res = await fetch(url + '&t=' + title)
    const movie  = await res.json()
    
    this.setState({
      movie,
      isFetching:false
    })
  }

  render() {
    const {movie, isFetching} = this.state

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Nombre de Pelicula"></input>
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        {movie.Title && !isFetching &&(
          <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <img 
              src={movie.Poster} 
              alt="Poster"
              style={{
                width: '150px'
              }}>
            </img>
          </div>
        )}
      </div>
    )
  }
}

export default App