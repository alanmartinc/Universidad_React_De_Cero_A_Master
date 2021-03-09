import React from 'react'
import styled from 'styled-components'

// Constantes básica
const colorPrincipal = '#789DFF'
const paddingBasic = 'padding: 0.1em'

// Constantes completas
const Header = styled.header `
  background: ${colorPrincipal};
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  ${paddingBasic};
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