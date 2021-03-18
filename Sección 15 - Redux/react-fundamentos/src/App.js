import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Counter from './components/Counter'

// Conectar componentes con Redux usando react-redux
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App