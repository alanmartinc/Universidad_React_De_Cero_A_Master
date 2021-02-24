import React, {Component, useState} from 'react'

// Hook useState
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

    return(
        <div>
            <Header/>
            <button onClick={() => {
                setClicks(clicks + 1)
            }}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

export default App