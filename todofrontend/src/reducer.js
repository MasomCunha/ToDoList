import { combineReducers } from 'redux'
import todoReducer from './store/todoReducer.js'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer