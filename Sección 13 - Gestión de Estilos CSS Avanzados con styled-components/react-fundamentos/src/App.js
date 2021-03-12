import React from 'react'
import styled from 'styled-components'

// Media Queries dinamicas con función
const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px'
}

const device = {
  mobile: (styles) => {
    return `@media (min-width: ${sizes.mobile}){
      ${styles}
    }`
  },

  tablet: (styles) => {
    return `@media (min-width: ${sizes.tablet}){
      ${styles}
    }`
  },

  desktop: (styles) => {
    return `@media (min-width: ${sizes.desktop}){
      ${styles}
    }`
  }
}

const Header = styled.header `
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;

  ${device.mobile`
    background: #000;
    font-size: 20px;
    color: yellow;
  `}

  ${device.tablet`
    background: red;
    font-size: 25px;
    color: white;
  `}
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