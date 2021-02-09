import React, {Component} from 'react'

// Iterando listas con React
const frutas = [
    'frutilla',
    'manzana',
    'naranja',
    'kiwi'
]

class App extends Component {
    render() {
        return(
            <div>
                <ul>
                    {frutas.map((fruta) => {
                        return (
                            <li>{fruta}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default App