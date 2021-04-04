import {createStore} from './objects'

describe('Test a Objetos', () => {
    test('Agregar un item en store', () => {
        const store = createStore()

        store.addItem({
            name: 'Gerardo',
            id: 1,
            country: 'Mexico'
        })

        expect(store.getstore()[0]).toEqual({
            name: 'Gerardo',
            id: 1,
            country: 'Mexico'
        })
    })

    test('Buscar un item por el ID', () => {
        const store = createStore()

        store.addItem({
            name: 'Gerardo',
            id: 1,
            country: 'Mexico'
        })

        expect(store.getById(1)).toEqual({
            name: 'Gerardo',
            id: 1,
            country: 'Mexico'
        })

        expect(store.getById(1)).toMatchObject({
            name: 'Gerardo'
        })

        expect(store.getById(1)).toHaveProperty('name', 'Gerardo')
    })
})