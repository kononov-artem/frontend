import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signin from './signin'
import dictionaries from './dictionaries'

export default history =>
    combineReducers({
        signin,
        dictionaries,
        router: connectRouter(history),
    })
