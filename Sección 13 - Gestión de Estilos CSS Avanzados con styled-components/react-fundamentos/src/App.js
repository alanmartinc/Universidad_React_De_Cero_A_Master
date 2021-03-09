import React from 'react'
import styled from 'styled-components'
import {colorPrincipal} from './colors'

// Constantes básicas
const Header = styled.header `
  background: ${colorPrincipal};
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`
const Subtitle = styled.h2 `
  color: ${colorPrincipal};
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>Styled Components</h1>
      </Header>
      <Subtitle>
        Ejemplo de Titulo
      </Subtitle>
    </div>
  )
}

export default App