const getValue = (exp) => {
    switch(exp) {
        case 'definido':
            return {}
        
        case 'indefinido':
            return undefined

        case 'verdadero':
            return true
        
        case 'falso':
            return false

        default: 
            return null
    }
}

describe('Testear valores null, undefined y booleanos', () => {
    test('Validar si existe o esta definido un valor', () => {
        expect(getValue('definido')).toBeDefined()
    })

    test('Validar si el valor es null', () => {
        expect(getValue()).toBeNull()
    })

    test('Validar si el valor es verdadero', () => {
        expect(getValue('verdadero')).toBeTruthy()
    })

    test('Validar si el valor es falso', () => {
        expect(getValue('falso')).toBeFalsy()
    })

    test('Validar si el valor es NaN', () => {
        expect(NaN).toBeNaN()
    })
})