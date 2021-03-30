import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// Midleware
const confirmDeleteTodo = (store) => (next) => (action) => {
  if (action.type === 'DELETE_TODO') {
    let conf = window.confirm('Seguro que quieres elimiar el todo?')

    if (conf) {
      next(action)
    }
  } else {
    next(action)
  }
}

// Store
// Almacenamiento de nuestro estado
const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo, logger, thunk))

export default store