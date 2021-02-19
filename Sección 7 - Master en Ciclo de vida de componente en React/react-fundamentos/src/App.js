import React, { Component } from 'react'

// El metodo componentDidUpdate
class UserDetails extends Component {
  state = {
    user: {},
    isFetching: false
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.userId !== this.props.userId) {
      this.fetchData()
    }
  }

  fetchData = () => {
    this.setState({
      isFetching: true
    })

    const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId

    fetch(URL)
      .then(res => res.json())
      .then(user => this.setState({user, isFetching: false}))
  }

  render() {
    return(
      <div>
        <h2>User Details</h2>
        {this.state.isFetching

        ? <h1>Cargando...</h1>

        : (
            <pre>
              {JSON.stringify(this.state.user, null, 4)}
            </pre>
          )

        }
      </div>
    )
  }
}

class App extends Component {
  state = {
    id: 1
  }

  aumentar = () => {
    this.setState(state => ({
      id: state.id + 1
    }))
  }

  render() {
    const {id} = this.state

    return(
      <div>
        <h1>Metodo componentDidUpdate</h1>
        <h2>ID: {id}</h2>
        <button onClick={this.aumentar}>
          Aumentar
        </button>
        <UserDetails
          userId={id}
        />
      </div>
    )
  }
}

export default App