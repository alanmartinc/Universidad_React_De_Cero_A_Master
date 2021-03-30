import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

// import Counter from './components/Counter'
// import Info from './components/Info'
// import Fruits from './components/Fruits'
// import Todos from './components/Todos'
// import Controller from './components/Controller'
import Blog from './components/Blog'

// Ejemplo de solicitud HTTP con Redux usando CRUD
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        {/* <Todos /> */}
        {/* <Controller /> */}
        <Blog />
      </div>
    </Provider>
  )
}

export default App