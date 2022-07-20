import {compose, createStore, applyMiddleware} from 'redux'
import { RootReducer } from './root-reducer'
import logger from 'redux-logger'

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(RootReducer, undefined, composeEnhancers)