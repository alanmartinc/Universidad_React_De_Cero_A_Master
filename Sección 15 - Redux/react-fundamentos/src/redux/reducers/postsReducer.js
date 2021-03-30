import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/postsActions'

const initialState = {
  posts: [],
  isFetching: false,
  error: null
}

function posts (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.posts
      }

    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default posts