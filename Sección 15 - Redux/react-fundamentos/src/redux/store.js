import {createStore} from 'redux'
import rootReducer from './reducers'

// Store: Almacenamiento de nuestro estado.
const store = createStore(rootReducer)

export default store
