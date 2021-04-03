import {suma, resta, multiplicacion, division, getRandomNum} from './numbers'

describe('Probando funciones matematicas', () => {
    test('Probando la funcion suma', () => {
        expect(suma(5,5)).toBe(10)
    })

    test('Probando la funcion resta', () => {
        expect(resta(5,5)).toBe(0)
    })

    test('Probando la funcion multiplicacion', () => {
        expect(multiplicacion(5,5)).toBe(25)
    })

    test('Probando la funcion division', () => {
        expect(division(5,5)).toBe(1)
    })

    test('Probando la funcion getRandomNum', () => {
        expect(getRandomNum(5,10)).toBeGreaterThanOrEqual(5)
        expect(getRandomNum(5,10)).toBeLessThan(11)
        expect(getRandomNum(5,10)).toBeLessThanOrEqual(10)
    })
})