import React, {useState, useEffect} from 'react'

// Controlar la ejecución de useEffect
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
                Hook useEffect
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [num, setNum] = useState(0)
    const [emoji, setEmoji] = useState('🦁')

    useEffect(() => {
        alert('useEffect ✨')
    }, [])

    const addNum = () => setNum(num + 1)
    const toggleEmoji = () => {
        const nextEmoji = emoji === '🦁' ? '🐨' : '🦁'
        setEmoji(nextEmoji)
    }

    return(
        <div>
            <Header/>
            <button onClick={addNum}>
                ADD ({num})
            </button>
            <button onClick={toggleEmoji}>
                Alternar Emoji
            </button>
            <h1>
                {emoji}
            </h1>
        </div>
    )
}

export default App