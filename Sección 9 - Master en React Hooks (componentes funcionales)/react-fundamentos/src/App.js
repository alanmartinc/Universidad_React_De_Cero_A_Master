import React, {useState, useEffect, useLayoutEffect} from 'react'

// Entendiendo el Hook useLayoutEffect
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
                useLayoutEffect
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [count, setState] = useState(0)
    const add = () => setState(count + 1)

    // useEffect -> Asincrono, Se ejecuta despues de que se actualiza el DOM
    useEffect(() => {
        console.log('useEffect 1')
    }, [count])

    useEffect(() => {
        console.log('useEffect 2')
    }, [count])

    // useLayoutEffect -> Sincrono, Se ejecuta antes de que se actualiza el DOM
    useLayoutEffect(() => {
        console.log('useLayoutEffect 1')
    }, [count])

    useLayoutEffect(() => {
        console.log('useLayoutEffect 2')
    }, [count])

    return(
        <div>
            <Header/>
            <button onClick={add}>
                Add ({count})
            </button>
        </div>
    )
}

export default App