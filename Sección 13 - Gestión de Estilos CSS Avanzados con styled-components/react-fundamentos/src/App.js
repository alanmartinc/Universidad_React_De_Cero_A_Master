import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

// Estilos globales con styled-components
const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
    font-family: ${props => props.font};
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
`

const App = () => {
  return (
    <div>
      <GlobalStyle font="'Oswald', sans-serif"/>

      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>
    </div>
  )
}

export default App