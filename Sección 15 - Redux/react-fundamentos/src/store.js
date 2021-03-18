import {createStore} from 'redux'
import rootReducer from './reducers'
import {INCREMENT, DECREMENT} from './reducers/counter'

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

// Store: Almacenamiento de nuestro estado.
const store = createStore(rootReducer)

export default store
