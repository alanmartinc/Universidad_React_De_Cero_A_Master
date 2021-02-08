import React, {Component} from 'react';

// Renderizados condicionales con React
const Saludo = (props) => {
    return(
        <div>
            <div>
                {props.name && <strong>{props.name}</strong>}
            </div>

            {props.saluda
                ? (
                    <h1>Hola, tu eres genial!</h1>
                )

                : (
                    <p>Wops, no hay saludos para ti!</p>
                )
            }
        </div>
    )
}

const App = () => (
    <div>
        <Saludo saluda={true} name='Ninja Pro'/>
    </div>
)

export default App