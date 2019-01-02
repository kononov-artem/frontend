import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import history from '../history.js'
import createRootReducer from 'store/reducers'

const reducer = createRootReducer(history)

export const initialState = {}
export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(routerMiddleware(history), thunk, logger)
)
