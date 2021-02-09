import React, {Component} from 'react'

// Iterando listas de Objetos
class App extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Camisa',
                colors: ['#467367', '#05fd88', '#a706ee'],
                price: 20
            },
            {
                id: 2,
                name: 'Jeans',
                colors: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8'],
                price: 32
            },
            {
                id: 3,
                name: 'Taza',
                colors: ['#804342', '#FFD2D1', '#FF8785', '#806969'],
                price: 20
            }
        ]
    }

    render() {
        return(
            <div>
                <h3>Iterando listas de objetos</h3>
                <div>
                    {this.state.products.map((product) => {
                        return(
                            <div>
                                $ {product.price} - {product.name}

                                <div>
                                    {product.colors.map((color) => {
                                        return(
                                            <span style={{
                                                width: '13px',
                                                height: '13px',
                                                borderRadius: '0.1em',
                                                border: '1px solid gray',
                                                display: 'inline-block',
                                                margin: '0.1em',
                                                background: color
                                            }}></span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App