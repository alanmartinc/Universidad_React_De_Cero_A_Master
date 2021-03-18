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
const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

// Acciones
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

setTimeout(() => {
    store.dispatch(decrement())
}, 2000)

// store.getState() -> Elemento actual del estado
// store.dispatch() -> Dispara acciones
// store.subscribe() -> Se puede subscribir a los cambios que surjan dentro del store

export default store
