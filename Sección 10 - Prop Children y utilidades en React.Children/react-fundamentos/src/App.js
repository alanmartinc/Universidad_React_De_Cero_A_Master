import React, {Component} from 'react'
import './global.css'

// Tratamiento de Children con las utilidades de React.Children
class Parent extends Component {
    render() {
        const {children: ch} = this.props

        const childrenArray = React.Children.toArray(ch)

        const children = childrenArray.map((child, index) => (
            <li key={index}>
                {child}
            </li>
        ))

        return(
            <div className='box'>
                <div className='box blue'>
                    {React.Children.count(children)}
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
                    <span>Fresa</span>
                    <span>Manzana</span>
                    <span>Sandia</span>
                </Parent>
            </div>
        )
    }
}

export default App