export const suma = (a, b) => {
    return a + b
}

export const resta = (a, b) => {
    return a - b
}

export const division = (a, b) => {
    return a / b
}

export const multiplicacion = (a, b) => {
    return a * b
}

export const getRandomNum = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    ) 
}