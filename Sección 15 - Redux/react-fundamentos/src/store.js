import {createStore} from 'redux'

// Reducer: Es una funcion pura que nos regresa el estado actual.
const initialState = 0

// Nombre de constantes de acciones
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1

        default:
            return state
    }
}

// Store: Almacenamiento de nuestro estado.
const store = createStore(counter)

// Creadores de acciones
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export default store
