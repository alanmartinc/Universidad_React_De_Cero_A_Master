import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// Midleware
const confirmDeleteTodo = (store) => (next) => (action) => {
    if(action.type === 'DELETE_TODO') {
        let conf = window.confirm('¿Seguro que quieres eliminar el todo?')

        if(conf) {
            next(action)
        }
    } else {
        next(action)
    }

    // setTimeout(() => {
    //     next(action)
    // }, 1000)

    // if(action.type !== 'ADD_TODO') {
    //     // store.dispatch
    //     setTimeout(() => {
    //         store.dispatch({
    //             type: 'ADD_TODO',
    //             payload: {
    //                 text: 'Todo creado en Midleware',
    //                 checked: false,
    //                 id: 'd153sgge'
    //             }
    //         }, 4000)
    //     }, 1000)
    // }
}

// Store: Almacenamiento de nuestro estado.
const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo, logger, thunk))

export default store
