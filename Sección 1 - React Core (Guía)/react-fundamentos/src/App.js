import React, {Component} from 'react';

// Elementos sin etiquetas con fragments
const Computacion = () => (
    <React.Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </React.Fragment>
)

const Ropa = () => (
    <React.Fragment>
        <li>Playera</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </React.Fragment>
)

class App extends Component {
    render() {
        return(
            <div>
                <Computacion/>
                <Ropa/>
            </div>
        )
    }
}

export default App