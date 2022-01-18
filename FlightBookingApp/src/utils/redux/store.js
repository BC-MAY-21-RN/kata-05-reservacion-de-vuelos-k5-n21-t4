import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { uidReducer } from './reducers.js'

const rootReducer = combineReducers({uidReducer})

export const Store = createStore(rootReducer, applyMiddleware(thunk))