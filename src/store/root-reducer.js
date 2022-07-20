import {combineReducers} from 'redux'
import { userReducer } from './user/userReducer'


export const RootReducer = combineReducers({
  user: userReducer,
})