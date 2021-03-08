import React from 'react'
import Acordion from './components/Acordion'

// Workshop de Componente Acordion
const App = () => {
    return(
        <div>
            <Acordion
                title='Ejemplo de Acordeon'
                content='lorem ipsum'
                bgColor='black'
            />

            <Acordion
                title='Porque Universidad React'
                content='El curso mas completo y actualizado de React'
            />

            <Acordion
                title='Siguiente Nivel'
                content='lorem ipsum'
                bgColor='orangered'
            />
        </div>
    )
}

export default App