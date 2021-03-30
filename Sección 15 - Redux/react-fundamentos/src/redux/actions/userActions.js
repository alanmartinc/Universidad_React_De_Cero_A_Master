export const UPDATE_NAME = 'UPDATE_NAME'

export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: {
      name
    }
  }
}