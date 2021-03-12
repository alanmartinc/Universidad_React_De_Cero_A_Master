import React from 'react'
import styled, {css} from 'styled-components'

// Función de utilidad CSS en styled-components
const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

const primaryStyles = css`
  border: ${props => `2px solid ${props.borderColor || 'green'}`};
`

const Button = styled.button`
  padding: 1em 2em;
  margin: 1em;
  ${props => props.primary && primaryStyles}
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Button primary borderColor='orangered'>
        Dispara
      </Button>

      <Button primary>
        Green
      </Button>
    </div>
  )
}

export default App