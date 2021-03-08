import React from 'react'
import Slides from './components/Slides'

const images = [
    {
        src: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        title: 'El universo el origen'
    },
    {
        src: 'https://images.pexels.com/photos/2521470/pexels-photo-2521470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'El diseño tambien es arte!'
    },
    {
        src: 'https://images.pexels.com/photos/3018365/pexels-photo-3018365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'La fotogradia el mejor camino!'
    },
    {
        src: 'https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'La naturaleza siempre la guia'
    }
]

const App = () => {
    return (
        <div>
        <Slides
            interval={2000}
            images={images}
        />
    </div>
    )
}

export default App