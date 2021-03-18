import {combineReducers} from 'redux'
import counter from './counterReducer'
import user from './userReducer'

export default combineReducers({
    counter,
    user
})