import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'

// Entendiendo el Hook useImperativeHandle
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
                Hook useInperativeHandle
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

// React.forwardRef()
// Ejecutar metodos de instancia

const FancyInput = forwardRef((props, ref) => {
    const [text, setText] = useState('***')
    const entrada = useRef()

    useImperativeHandle(ref, () => ({
        dispatchAlert: () => {
            alert('Hola')
        },

        setParragraph: (message) => {
            setText(message)
        },

        focusInput: () => {
            entrada.current.focus()
        }
    }))

    return(
        <div>
            <p>{text}</p>
            <input type='text' ref={entrada}/>
        </div>
    )
})

const App = () => {
    const fancyInput = useRef()

    const handleClick = () => {
        fancyInput.current.focusInput()
    }

    return(
        <div>
            <Header/>
            <FancyInput ref={fancyInput}/>
            <button onClick={handleClick}>
                Dispatch
            </button>
        </div>
    )
}

export default App