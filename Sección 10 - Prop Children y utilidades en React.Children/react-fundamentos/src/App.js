import React, {Component} from 'react'
import {Counter, Title, Button} from './components/Counter'

// Ejemplo de patron de composición implícita
class App extends Component {
    render() {
        return (
            <Counter>
                <Button type='increment'/>
                <Title/>
                <Button type='decrement'/>
                <Title>
                    {(clicks) => (
                        <h1>{clicks} Clicks</h1>
                    )}
                </Title>
            </Counter>
        )
    }
}

export default App