import React from 'react'
import ReactDOM from 'react-dom'

const TarjetaFruta = () => (
    <div>
        <h3>Titulo</h3>
        <hr/>
        <p>Descripcion...</p>
    </div>
)

const App = () => (
    <div>
        <TarjetaFruta/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))