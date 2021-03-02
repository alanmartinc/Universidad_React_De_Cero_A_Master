import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'

// Usar React.memo con diferenciación manual
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
                React.memo
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

// React.memo() HOC
const Counter = React.memo(({count}) => {
    console.log('%cRender <Counter/>', 'color: blue')

    return(
        <h1>
            {count}
        </h1>
    )
})

const Title = React.memo(({text}) => {
    console.log('%cRender <Title/>', 'color: orangered')

    return(
        <h1>
            {text}
        </h1>
    )
})

const TitleNested = React.memo(({info}) => {
    console.log('%cRender <TitleNested/>', 'color: purple')

    return(
        <h1>
            {info.text}
        </h1>
    )
}, (prevProps, nextProps) => {
    // Si retorna true no se renderiza
    // Si retorna false si se renderiza
    return prevProps.info.text === nextProps.info.text
})

const App = () => {
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <Header/>
            <input type='text' onChange={handleInput}/>
            <button onClick={handleAdd}>
                Add
            </button>
            <Counter count={count}/>
            <Title text={title}/>
            <TitleNested info={{text: title}}/>
        </div>
    )
}

export default App