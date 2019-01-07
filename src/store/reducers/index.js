import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signin from './signin'
import dictionaries from './dictionaries'
import dictionaryDetail from './dictionaryDetail'

export default history =>
    combineReducers({
        signin,
        dictionaries,
        dictionaryDetail,
        router: connectRouter(history),
    })
