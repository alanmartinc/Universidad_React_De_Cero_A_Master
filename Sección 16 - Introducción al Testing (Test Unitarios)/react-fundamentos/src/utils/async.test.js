import {getDataCallback} from './async'

describe('Haciendo test a operaciones asincronas', () => {
    test('Haciendo test a callback', (done) => {
        getDataCallback((name) => {
            expect(name).toBe('Gerardo Gallegos')
            done()
        })
    })
})