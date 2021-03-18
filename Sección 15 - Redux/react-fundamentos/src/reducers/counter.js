// Reducer: Es una funcion pura que nos regresa el estado actual.
const initialState = 0

// Nombre de constantes de acciones
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

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

export default counter