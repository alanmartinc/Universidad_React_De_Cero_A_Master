import React, { Component } from 'react'

// Ejemplo buscador de peliculas
class App extends Component {
  state = {
    movie: {}
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => this.setState({movie}))
  }

  render() {
    const {movie} = this.state

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Nombre de Pelicula"></input>
          <button>
            Buscar
          </button>
        </form>
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
    )
  }
}

export default App