import React from 'react'
import styled from 'styled-components'

// Constantes básica
const colorPrincipal = '#789DFF'

// Constantes completas
const paddingBasic = 'padding: 0.1em'

// Variables Dinámicas con funciones
const getLinearGradient = (rot, color1, color2) => {
  return `background: linear-gradient(${rot}, ${color1}, ${color2});`
}

const Header = styled.header `
  ${getLinearGradient('50deg', 'blue', 'red')}
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