import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signin from './signin'

export default history =>
    combineReducers({
        signin,
        router: connectRouter(history),
    })
