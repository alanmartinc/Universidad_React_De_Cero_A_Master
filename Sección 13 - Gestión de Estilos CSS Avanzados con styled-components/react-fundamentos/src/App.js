import React from 'react'
import styled from 'styled-components'

// Componentes dinámicos con props
const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

const Button = styled.button `
  padding: 0.6em 1.5em;
  background: ${(props) => props.bg || 'gray'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>
      <Button>
        Un Boton
      </Button>
      <Button bg='orangered'>
        Toggle
      </Button>
    </div>
  )
}

export default App