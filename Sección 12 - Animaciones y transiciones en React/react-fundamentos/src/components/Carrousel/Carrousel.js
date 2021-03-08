import React, {useState} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import propTypes from 'prop-types'

import './Carrousel.css'

const Carrousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const left = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(images.length - 1)
    }
  }

  const right = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  return (
    <div className='Carrousel'>
      <div className='Carrousel_Buttons'>
        <button onClick={left}>
          Atras
        </button>
        <button onClick={right}>
          Siguiente
        </button>
      </div>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames='slide'
          key={activeIndex}
        >
          <img
            src={images[activeIndex]}
            alt='Imagen'
            className='Carrousel_Img'  
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

Carrousel.defaultProps = {
  images: []
}

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string
  )
}

export default Carrousel