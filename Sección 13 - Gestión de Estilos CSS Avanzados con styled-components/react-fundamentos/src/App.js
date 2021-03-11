import React, {useState} from 'react'
import styled from 'styled-components'

// Props con un operador ternario
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
  background: ${(props) => props.active ? 'purple' : 'gray'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;
`

const App = () => {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)

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
      <Button onClick={toggle} active={active}>
        Toggle
      </Button>
    </div>
  )
}

export default App