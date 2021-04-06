import React from 'react'

// Realizando pruebas a nodos de componente
export const Title = () => (
  <h1>Introducción a Unit Testing</h1>
)

const App = () => {
  return (
    <section>
      <Title/>
      <div className='container'>
        <span num={3} active={false}>Primero</span>
        <span num='3' active='false'>Segundo</span>
      </div>
      <input type='text'/>

      <p>Fuera</p>

      <div>
        <p>Adentro 1</p>
        <section>
          <p>Adentro 2</p>
        </section>
      </div>
    </section>
  )
}

export default App