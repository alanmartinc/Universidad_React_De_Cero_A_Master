import { ADD_FRUIT } from '../actions/fruitsActions'

const inisialState = [
  'Fresa',
  'Manzana'
]

function fruits (state = inisialState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      // return state.concat(action.payload.fruit)
      return [
        action.payload.fruit,
        ...state
      ]

    default:
      return state
  }
}

export default fruits