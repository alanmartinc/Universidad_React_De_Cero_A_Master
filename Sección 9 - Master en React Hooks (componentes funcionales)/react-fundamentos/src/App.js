import React, {useRef} from 'react'

// Entendiendo el Hook useRef
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
                Hook useRef
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const entrada = useRef()
    const focus = () => entrada.current.focus()
    const blur = () => entrada.current.blur()

    return(
        <div>
            <Header/>
            <input type='text' placeholder='Ingresa tu texto' ref={entrada}/>
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
}

export default App