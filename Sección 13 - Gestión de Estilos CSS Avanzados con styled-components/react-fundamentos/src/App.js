import React from 'react'
import styled from 'styled-components'

// Metodo de atributos attrs con styled-components
const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder || 'Ingresa el texto',
  type: props.type || 'text'
})) `
  padding: 1em;
  border: 1px solid blue;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Input/>
      <Input placeholder= 'Tu cerveza favorita'/>
    </div>
  )
}

export default App