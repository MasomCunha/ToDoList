import { combineReducers } from 'redux'
import todoReducer from './store/todoReducer.js'
import logginReducer from './store/logginReducer.js'

const rootReducer = combineReducers({
    todo: todoReducer,
    loggin: logginReducer
})

export default rootReducer