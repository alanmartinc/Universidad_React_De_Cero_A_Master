import React, {useState, lazy, Suspense} from 'react'
import {MoonLoader} from 'react-spinners'

// Code Splitting - Importación Dinámica
const Image = lazy(() => import('./components/Image'))

// Ejemplo React.lazy y React.Suspense
const App = () => {
    const [show, setShow] = useState(false)

    const toggle = () => setShow(!show)

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    return(
        <div style={styles}>
            <button onClick={toggle}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            {show && (
                <Suspense fallback={<MoonLoader color='orangered'/>}>
                    <Image/>
                </Suspense>
            )}
        </div>
    )
}

export default App