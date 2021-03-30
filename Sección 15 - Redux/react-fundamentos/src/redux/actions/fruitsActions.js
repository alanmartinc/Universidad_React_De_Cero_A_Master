export const ADD_FRUIT = 'ADD_FRUIT'

export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  payload: {
    fruit
  }
})