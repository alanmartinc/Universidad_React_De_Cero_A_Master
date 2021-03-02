import React, {useState, useEffect} from 'react'

// Hook personalizado para hacer solicitudes HTTP
const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
    <header style={styles}>
        <h1>
        Hooks Personalizados
            <span role='img' aria-label='hook emoji'>
                ⚓
            </span> 
        </h1>
    </header>
    )
}

const useFetch = (url) => {
    const [data, setData] =  useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setFetching(false)
            })
    }, [ url ])

    return [
    data,
    isFetching
    ]
}

const App = () => {
    const [users, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
    <div>
        <Header />
        {isLoading && <h1>Cargando...</h1>}
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    { user.name }
                </li>
            ))}
        </ul>
    </div>
    )
}

export default App