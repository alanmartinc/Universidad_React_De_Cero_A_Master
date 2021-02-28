import React, {useState, useContext} from 'react'

// Entendiendo el Hook useContext
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
                Hook useContext
                <span role='img' aria-label='hook emoji'>⚓</span>
            </h1>
        </header> 
    )
}

const MyContext = React.createContext()

// Consumir context de forma tradicional
// const Nieto = () => (
//     <MyContext.Consumer>
//         {(context) => (
//             <div>
//                 <p>Nieto {context.num}</p>
//                 <button onClick={context.addNum}>
//                     Nieto Dispatcher
//                 </button>
//             </div>
//         )}
//     </MyContext.Consumer>
// )

const Nieto = () => {
    const {num, addNum} = useContext(MyContext)

    return(
        <div>
            <p>Nieto {num}</p>
            <button onClick={addNum}>
                Nieto Dispatcher
            </button>
        </div>
    )
}

const Hijo = () => (
    <div>
        <p>Hijo</p>
        <Nieto/>
    </div>
)

const App = () => {
    const [num, setNum] = useState(0)
    const addNum = () => setNum(num + 1)

    return(
        <MyContext.Provider value={{
            num,
            addNum
        }}>
            <div>
                <Header/>
                <button onClick={addNum}>
                    Add ({num})
                </button>
                <Hijo/>
            </div>
        </MyContext.Provider>
    )
}

export default App