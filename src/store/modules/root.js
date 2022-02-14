import { combineReducers } from 'redux'
import { cartReducer } from './cart/reducer.js'
import { themeReducer } from './theme/reducer.js'

export default combineReducers({
  cartReducer,
  themeReducer
})
