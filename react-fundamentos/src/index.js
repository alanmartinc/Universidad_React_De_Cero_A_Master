import React from 'react'
import ReactDOM from 'react-dom'

const TarjetaFruta = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
            <hr/>
            <p>$ {props.price}</p>
        </div>
    )
}

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={4.00}/>
        <TarjetaFruta name='Naranja' price={2.00}/>
        <TarjetaFruta name='Kiwi' price={6.00}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))