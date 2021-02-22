import React, { Component} from 'react'

// El metodo componentWillUnmount
class Timer extends Component {
  state = {
    time: 0,
    isPlaying: true
  }

  tick = null

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    this.props.onDestroy()
    clearInterval(this.tick)
  }

  play = () => {
    this.setState({isPlaying: true})

    this.tick = setInterval(() => {
      this.setState(state => ({
        time: state.time + 1
      }))
    }, 1000);
  }

  pause = () => {
    this.setState({isPlaying: false})

    clearInterval(this.tick)
  }

  toggle = () => {
    if(this.state.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  render() {
    const {time, isPlaying} = this.state

    return(
      <div>
        <h1>{time}</h1>
        <button onClick={this.toggle}>
          {isPlaying ? 'pause' : 'play'}
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    mostrar: true,
    message: ''
  }

  desmontar = () => {
    this.setState({mostrar:false})
  }

  handleDestroy = () => {
    this.setState({
      message: 'El componente contador fue destruido'
    })
  }

  render() {
    return(
      <div>
        <h1>El metodo componentWillUnmount</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.desmontar}>
          Desmontar
        </button>
        {this.state.mostrar && <Timer onDestroy={this.handleDestroy}/>}
      </div>
    )
  }
}

export default App