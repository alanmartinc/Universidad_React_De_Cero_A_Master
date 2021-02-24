import React, {Component, useEffect, useState} from 'react'

// Introducción al Hook useEffect
const Header = () => {
    const subtitleStyles = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.3em',
        padding: '.3em',
        color: '#FFF',
        borderRadius: '0.2em',
        textAlign: 'center',
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        fontSize: '14px'
    }

    return(
        <header style={headerStyles}>
            <h1>
                Hook useState
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [clicks, setClicks] = useState(0)

    useEffect(() => {
        // componentDidMount
        // componentDidUpdate
        console.log('Dentro de useEffect', clicks)
        // Cuando ponemos el signo de % y c, como segundo parametro le podemos pasar estilos CSS
        console.log('%c---------------------------', 'color: green')

        return() => {
            // componentWillUnmount
            console.log('Return de useEffect', clicks)
        }
    })

    const add = () => setClicks(clicks + 1)

    return(
        <div>
            <Header/>
            <button onClick={add}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

export default App