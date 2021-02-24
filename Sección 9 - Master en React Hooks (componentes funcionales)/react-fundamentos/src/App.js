import React, {useState, useEffect} from 'react'

// Reglas de Hooks
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
                Reglas de Hooks
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [clicks, setClicks] = useState(1)
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