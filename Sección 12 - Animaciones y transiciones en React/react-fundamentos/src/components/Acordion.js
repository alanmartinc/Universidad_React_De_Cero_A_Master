import React, {useState, useRef} from 'react'
import propTypes from 'prop-types'
import arrowImg from '../img/arrow.svg'

const Acordion = ({title, content, bgColor}) => {
    const [isExpanded, setExpanded] = useState(false)
    const contentRef = useRef()

    const toggle = () => setExpanded(!isExpanded)

    const panelStyles = {
        background: bgColor,
        color: '#FFF',
        padding: '0.5em 1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none'
    }

    const contentStyles = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow: 'hidden',
        transition: 'all 350ms ease-out',
        border: '2px solid ' + bgColor,
        padding: isExpanded ? '1em 0.5em' : '0 0.5em'
    }

    const imageStyles = {
        width: '18px',
        transition: 'transform 250ms ease',
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    return(
        <div>
            <div style={panelStyles} onClick={toggle}>
                <span>{title}</span>
                <img style={imageStyles} src={arrowImg} alt='Flecha'/>
            </div>
            <div style={contentStyles} ref={contentRef}>
                {content}
            </div>
        </div>
    )
}

Acordion.defaultProps = {
    title: '',
    content: '',
    bgColor: '#523da5'
}

Acordion.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    bgColor: propTypes.string,
}

export default Acordion