import React, {Component} from 'react';

// Diferencia de evento nativo DOM y evento sintético de React
class App extends Component {
    manejador = (e) => {
        e.preventDefault()

        console.log(e.nativeEvent)
    }

    render() {
        return(
            <div>
                <a href="https://google.com" onClick={this.manejador}>Google</a>
            </div>
        )
    }
}

export default App