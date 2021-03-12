import React from 'react'
import styled, {keyframes} from 'styled-components'

// Animaciones ejemplo #2
const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

const pulse = keyframes`
  0% {
    transform: scale(1);
    background: gray;
    color: #000;
  }

  50% {
    transform: scale(1.3);
    background: purple;
    color: #FFF;
  }

  100% {
    transform: scale(1);
    background: gray;
    color: #000;
  }
`

const Button = styled.button`
  padding: 1em 2.5em;
  margin: 1em;

  &:hover {
    animation: ${pulse} 2s ease-in-out;
  }
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
        Boton
      </Button>
    </div>
  )
}

export default App