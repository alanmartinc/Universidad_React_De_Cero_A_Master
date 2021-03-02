import React, {useState, useEffect} from 'react'

// Extension para Hooks EsLint
const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
    <header style={styles}>
        <h1>
        Extension EsLint Hooks
            <span role='img' aria-label='hook emoji'>
                ⚓
            </span> 
        </h1>
    </header>
    )
}

    

const App = () => {
    const [clicks, setClicks] = useState(1)
    const add = () => setClicks(clicks + 1)

    useEffect(() => {
        console.log('useEffect')
    }, [])

    return (
    <div>
        <Header/>
        <button onClick={add}>
            Clicks ({clicks})
        </button>
    </div>
    )
}

export default App