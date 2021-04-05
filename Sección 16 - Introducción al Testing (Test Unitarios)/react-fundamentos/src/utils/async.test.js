import {getDataCallback, getDataPromise, getDataPromiseError} from './async'

describe('Haciendo test a operaciones asincronas', () => {
    test('Haciendo test a callback', (done) => {
        getDataCallback((name) => {
            expect(name).toBe('Gerardo Gallegos')
            done()
        })
    })

    test('Haciendo test a promesa', (done) => {
        getDataPromise()
            .then((name) => {
                expect(name).toBe('Gerardo Gallegos')
                done()
            })
    })

    test('Haciendo test a promesa con expect', () => {
        return expect(getDataPromise()).resolves.toBe('Gerardo Gallegos')
    })

    test('Haciendo test a promesa rechazada', (done) => {
        getDataPromiseError()
            .catch((error) => {
                expect(error).toBe('Error')
                done()
            })
    })

    test('Haciendo test a promesa rechazada con expect', () => {
        return expect(getDataPromiseError()).rejects.toBe('Error')
    })
})