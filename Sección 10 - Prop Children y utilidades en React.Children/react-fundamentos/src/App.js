import React, {Component} from 'react'
import './global.css'

// Entendiendo la Prop Children en profundidad
class Parent extends Component {
    render() {
        const {children} = this.props

        return(
            <div className='box'>
                <div className='box blue'>
    
                </div>
    
                <div className='box red'>
                    {children}
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Parent>
                    Hijo de Texto
                </Parent>
            </div>
        )
    }
}

export default App