import {setTimeout} from 'timers'

export const getDataCallback = (callback) => {
    // Solicitud http a un API
    const name = 'Gerardo Gallegos'

    setTimeout(() => {
        callback(name)
    }, 300)
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gerardo Gallegos')
        }, 300)
    })
}

export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error')
        }, 300)
    })
}