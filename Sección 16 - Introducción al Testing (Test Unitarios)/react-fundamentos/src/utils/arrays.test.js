import {createStore} from './arrays'

describe ('Haciendo pruebas a listas / Arrays', () => {
    test('Probando agregar dos frutas', () => {
        const store = createStore()

        store.addFruit('fresa')
        store.addFruit('melon')

        expect(store.getFruits()).toStrictEqual(['fresa', 'melon'])
    })

    test('Probando si contiene fruta especifica', () => {
        const store = createStore()

        store.addFruit('pera')
        store.addFruit('manzana')

        expect(store.getFruits()).toContain('pera')
        expect(store.getFruits()).not.toContain('banana')
    })

    test('Probando la longitud del Array', () => {
        const store = createStore()

        store.addFruit('pera')
        store.addFruit('manzana')
        store.addFruit('banana')

        expect(store.getFruits()).toHaveLength(3)
    })

    test('Probando agregar un objeto con información de frutas', () => {
        const store = createStore()

        store.addFruit({
            name: 'fruta',
            price: 10
        })

        expect(store.getFruits()).toContainEqual({name: 'fruta', price: 10})
    })
})