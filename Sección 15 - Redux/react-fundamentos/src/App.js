import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
// import Counter from './components/Counter'
// import Info from './components/Info'
import Fruits from './components/Fruits'

// Géstion de estado usando Arrays
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info/>
        <Counter/> */}
        <Fruits/>
      </div>
    </Provider>
  )
}

export default App