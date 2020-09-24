import { combineReducers } from 'redux'
import todoReducer from './store/todoReducer.js'
import authReducer from './store/authReducer.js'
import searchReducer from './store/searchReducer.js'

const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer,
    search: searchReducer
})

export default rootReducer