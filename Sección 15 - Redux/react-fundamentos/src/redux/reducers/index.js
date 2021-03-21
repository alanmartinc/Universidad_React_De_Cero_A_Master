import {combineReducers} from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitsReducer'

export default combineReducers({
    counter,
    user,
    fruits
})