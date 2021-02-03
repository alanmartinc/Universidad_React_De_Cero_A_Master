import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {
    constructor () {
        super()

        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]

        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        this.state = {
            cantidad: 0
        }
    }

    agregar() {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    quitar() {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar() {
        this.setState({
            cantidad: 0
        })
    }

    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>Cantidad: {this.state.cantidad}</div>
                <button 
                    onClick={this.agregar}>+
                </button>
                <button 
                    onClick={this.quitar}>-
                </button>
                <button 
                    onClick={this.limpiar}>Limpiar
                </button>
                <p>$ {this.props.price}</p>
            </div>
        )
    }
}

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={4.00}/>
        <TarjetaFruta name='Naranja' price={2.00}/>
        <TarjetaFruta name='Kiwi' price={6.00}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))