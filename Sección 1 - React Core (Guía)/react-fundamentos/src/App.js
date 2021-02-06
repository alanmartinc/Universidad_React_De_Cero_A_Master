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

// Operador Spread
const resultado = {
    ...perfil,
    ...region,
    ...social,
    info: {
        ...perfil.info,
        ...region.info
    }
}

console.log(resultado);

export default App

// Operador Spread con Arrays
const frutasVerdes = [
    'kiwi',
    'uva',
    'limon'
]

const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]

const frutas = [
    ...frutasVerdes,
    'pera',
    ...frutasRojas
]
console.log(frutas);