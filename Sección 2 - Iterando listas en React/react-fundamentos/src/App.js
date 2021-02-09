import React, {Component} from 'react'

// Prop Key al iterar listas con React
const users = [
    {id: 1, name: 'Gerardo', country: 'Mexico', edad: 35},
    {id: 2, name: 'Alan', country: 'Argentina', edad: 24},
    {id: 3, name: 'Piter', country: 'Estados Unidos', edad: 18},
    {id: 4, name: 'Jhun', country: 'China', edad: 45}
] 

class App extends Component {
    render() {
        return(
            <div>
                <h1>Iterando</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App