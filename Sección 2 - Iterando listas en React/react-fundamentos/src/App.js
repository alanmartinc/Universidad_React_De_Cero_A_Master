import React, {Component} from 'react'

// Iterando propiedades de Objetos
class App extends Component {
    state = {
        user: {
            name: 'Gerardo',
            country: 'Mexico',
            twitter: '@luxfenix'
        }
    }

    render() {
        const {user} = this.state
        const keys = Object.keys(user)

        return(
            <div>
                <h3>Iterando propiedades de objetos</h3>
                <ul>
                    {keys.map(key => (
                        <li>
                            <strong>{key}:</strong>{user[key]}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App