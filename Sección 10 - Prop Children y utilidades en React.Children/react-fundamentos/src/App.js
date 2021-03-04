import React from 'react'
import { Button, Counter, Title } from './components/Counter'

// Workshop de composición implícita con React Children
const App = () => (
    <div>
        <Counter>
            <Title/>
            <Title>
                {(click) => (
                    <div style={{color: 'purple'}}>
                        <h1>{click}</h1>
                    </div>
                )}
            </Title>
            <Button type='increment'/>
            <Button type='decrement'/>
        </Counter>
    </div>
)

export default App