import {combineReducers} from 'redux'
import { categoriesReducer } from './categories/categoryReducer'
import { userReducer } from './user/userReducer'


export const RootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
})