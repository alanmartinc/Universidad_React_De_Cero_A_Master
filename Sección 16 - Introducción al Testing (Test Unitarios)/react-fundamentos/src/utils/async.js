import {setTimeout} from 'timers'

export const getDataCallback = (callback) => {
    // Solicitud http a un API
    const name = 'Gerardo Gallegos'

    setTimeout(() => {
        callback(name)
    }, 2000)
}