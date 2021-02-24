import React, {useState, useEffect} from 'react'

// Ejemplo de solicitud HTTP con Hook useEffect
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
                Hook useEffect
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const App = () => {
    const [users, setUsers] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                setFetching(false)
            })
    }, [])

    return(
        <div>
            <Header/>
            {isFetching && <h1>Cargando...</h1>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App