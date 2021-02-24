import React, {useState, useEffect} from 'react'

// Ejemplo de uso useEffect
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
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    })

    return(
        <div>
            <Header/>
            <h1>
                X: {mouseX} Y: {mouseY}
            </h1>
        </div>
    )
}

export default App