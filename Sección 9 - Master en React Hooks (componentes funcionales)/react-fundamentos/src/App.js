import React, {Component, useState} from 'react'

// Ejemplo de Hook useState con Objetos
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
    const [state, setState] = useState({
        clicks: 0,
        title: ''
    })

    const merge = (nextState) => {
        setState({
            ...state,
            ...nextState
        })
    }

    const addClicks = () => {
        merge({
            clicks: state.clicks + 1
        })
    }

    const handleInput = (e) => {
        const title = e.target.value

        merge({
            title
        })
    }

    return(
        <div>
            <Header/>
            <input type="text" value={state.value} onChange={handleInput}/>
            <button onClick={addClicks}>
                Clicks ({state.clicks})
            </button>
            <h3>{state.title}</h3>
        </div>
    )
}

export default App