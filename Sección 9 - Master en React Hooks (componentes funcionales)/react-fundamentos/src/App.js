import React, {useState, useEffect, useRef} from 'react'
import {useDebounce} from 'use-debounce'

// Ejemplo aplicando Hooks de terceros de NPM
const Header = () => {
    const subtitleStyles = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.3em',
        padding: '.3em',
        color: '#FFF',
        borderRadius: '0.2em',
        textAlign: 'center',
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        fontSize: '14px'
    }

    return(
        <header style={headerStyles}>
            <h1>
                Hook useRef
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [name, setName] = useState('')
    const [search] = useDebounce(name, 1000)
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Solicitud HTTP
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [search])

    const handleInput = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <Header/>
            <input type='text' onChange={handleInput} />
            <h1>{name}</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App