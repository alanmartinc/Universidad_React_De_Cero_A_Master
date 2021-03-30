import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
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

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = composeWithDevTools({
  name: 'Redux',
  realtime: true,
  trace: true,
  traceLimit: 20
})

// Store
// Almacenamiento de nuestro estado
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
)

export default store