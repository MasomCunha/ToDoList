import { combineReducers } from 'redux'
import todoReducer from './store/todoReducer.js'
import authReducer from './store/authReducer.js'


const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer,
})

export default rootReducer