import React, {useState, useReducer} from 'react'

// Entendiendo Hook useReducer

// Dispatch({type: 'INCREMENT', title: 'algo'})
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }

        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            }
    
        default:
            return state
    }
}

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
                Hook useReducer
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        title: 'Hola'
    })

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }

    const handleTitle = (e) => {
        dispatch({type: 'SET_TITLE', title: e.target.value})
    }

    return(
        <div>
            <Header/>
            <input type='text' onChange={handleTitle} value={state.title}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>
                {state.count} - {state.title}
            </h1>
        </div>
    )
}

export default App