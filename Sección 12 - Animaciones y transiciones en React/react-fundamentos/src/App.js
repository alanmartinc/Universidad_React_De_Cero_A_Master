import React, {useState} from 'react'
import './components/Animaciones.css'

// Transiciones y Animaciones con clases CSS
const Header = ({show}) => {
    const clases = show ? 'header header-active' : 'header' 

    return(
        <header className={clases}>
            <h1>
                Transiciones CSS en linea
                <span role='img' aria-label='fire'>
                    🔥
                </span>
            </h1>
        </header>
    )
}

const App = () => {
    const[active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return(
        <div>
            <button onClick={toggle}>
                {active ? 'Desactivar' : 'Activar'}
            </button>
            <Header show={active}/>
        </div>
    )
}

export default App