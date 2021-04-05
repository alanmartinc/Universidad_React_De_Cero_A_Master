import {getDataCallback, getDataPromise, getDataPromiseError, getUsers} from './async'

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

    test('Haciendo test a promesa resuelta con async await', async () => {
        const name = await getDataPromise()
        expect(name).toBe('Gerardo Gallegos')
    })

    test('Haciendo test a promesa rechazada con async await', async () => {
        try {
            const name = await getDataPromiseError()
            expect(name).toBe('Gerardo Gallegos')
        } catch (error) {
            expect(error).toBe('Error')
        }
    })

    test('Probando promesa con solicitud HTTP', async () => {
        const user = await getUsers()
        expect(user).toHaveProperty('username')
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('email')
    })
})