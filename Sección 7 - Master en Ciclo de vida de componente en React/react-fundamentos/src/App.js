import React, { Component } from 'react'

// El metodo componentDidMount
class Http extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    // Solicitudes HTTP
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photos => this.setState({photos}))
  }

  render() {
    const {photos} = this.state

    return(
      <div>
        {photos.map(photo => (
          <img 
            key={photo.id}
            src={photo.thumbnaiUrl}
            alt={photo.title}
          />
        ))}
      </div>
    )
  }
}

class Events extends Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  
  handleResize = () => {
    this.setState({width: window.innerWidth})
  }

  render(){
    return(
      <div>
        <h2>Events {this.state.width}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <h1>Metodo componentDidMount</h1>
        <Http/>
        <Events/>
      </div>
    )
  }
}

export default App