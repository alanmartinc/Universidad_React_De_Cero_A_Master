import React from 'react';

// Introducción a la prop especial children
const Title = ({uiColor, children}) => {
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    console.log(children)

    return(
        <h1 style={styles}>{children}</h1>
    )
}

class App extends React.Component {
    state = {
        uiColor: 'purple'
    }

    render() {
        const {uiColor} = this.state
        return(
            <div>
                <Title uiColor={uiColor}>
                    Ninja <em>Pro</em>
                </Title>
            </div>
        )
    }
}

export default App