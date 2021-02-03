import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta/';

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={4.00}/>
        <TarjetaFruta name='Naranja' price={2.00}/>
        <TarjetaFruta name='Kiwi' price={6.00}/>
    </div>
)

const perfil = {
    nombre: 'Gerardo',
    info: {
        direccion: 'La direccion...'
    }
}

const region = {
    pais: 'Mexico',
    // Este objeto sustituye al info de arriba
    info: {
        coordenadas: 'Coordenadas...'
    }
}

const social = {
    twitter: '@luxfenix'
}

const resultado = Object.assign(
    {},
    perfil,
    region,
    social,
    {
        info: Object.assign(
            {},
            perfil.info,
            region.info
        )
    }
)

console.log(resultado);

export default App