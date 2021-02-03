import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta/';

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={4.00}/>
        <TarjetaFruta name='Naranja' price={2.00}/>
        <TarjetaFruta name='Kiwi' price={6.00}/>
    </div>
)

export default App