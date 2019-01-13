import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signin from './signin'
import dictionaries from './dictionaries'
import dictionaryDetail from './dictionaryDetail'
import checkPermission from './checkPermission'
import getUsers from './getUsers'
import getTokenByUser from './getTokenByUser'

export default history =>
    combineReducers({
        signin,
        dictionaries,
        dictionaryDetail,
        checkPermission,
        getUsers,
        getTokenByUser,
        router: connectRouter(history),
    })
