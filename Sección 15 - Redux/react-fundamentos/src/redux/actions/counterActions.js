// Nombres de acciones
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Creadores de acciones
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const incrementAsync = (delay) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: INCREMENT
    })
  }, delay)
}