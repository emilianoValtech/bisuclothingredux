import {compose, createStore, applyMiddleware} from 'redux'
import { RootReducer } from './root-reducer'


const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type){
    return next(action)
  }

  console.log('type:', action.type)
  console.log("payload:", action.payload)
  console.log("currentState:", store.getState())

  next(action)

  console.log('nextState:', store.getState())
}

const middleWares = [loggerMiddleware]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(RootReducer, undefined, composeEnhancers)