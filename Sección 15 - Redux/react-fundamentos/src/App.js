import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

// import Counter from './components/Counter'
// import Info from './components/Info'
// import Fruits from './components/Fruits'
// import Todos from './components/Todos'
import Controller from './components/Controller'


// Introducción a Midlewares redux-thunk manejo de acciones asyncronas
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info/>
        <Counter/>
        <Fruits/>
        <Todos/> */}
        <Controller/>
      </div>
    </Provider>
  )
}

export default App