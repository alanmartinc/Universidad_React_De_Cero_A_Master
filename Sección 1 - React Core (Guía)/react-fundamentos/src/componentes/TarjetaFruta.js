import React from 'react';

class TarjetaFruta extends React.Component {
    state = {
        cantidad: 0
    }

    agregar = () => {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    quitar = () => {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar = () => {
        this.setState({
            cantidad: 0
        })
    }

    render () {
        // Constante para lógica CSS
        const hasItems = this.state.cantidad > 0

        // Forma de aplicar estilos
        const styles = {
            border:'1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItems ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
            color: hasItems > 0 ? '#FFF' : '#000',
            transition: 'all 400ms ease-out'
        }

        return (
            <div style={styles}>
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
                <p>
                    Total: $ {this.props.price * this.state.cantidad}
                </p>
            </div>
        )
    }
}

export default TarjetaFruta