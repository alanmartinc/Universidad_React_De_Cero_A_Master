import { UPDATE_NAME } from '../actions/userActions'

const initialState = {
  name: 'Gerardo',
  country: 'Mexico',
  coord: ''
}

function user (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name
      }

    default:
      return state
  }
}

export default user