import React from 'react'
import styled, {keyframes} from 'styled-components'

// Animaciones con styled-components
const anima = keyframes`
  0% {
    background: #000;
    transform: scale(1);
  }

  50% {
    background: #db7093;
    transform: scale(0.8);
  }

  100% {
    background: #000;
    transform: scale(1);
  }
`

const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
  animation: ${anima} 2s ease-in-out infinite;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>
    </div>
  )
}

export default App