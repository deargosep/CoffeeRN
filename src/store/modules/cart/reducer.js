import { createReducer } from '@reduxjs/toolkit'
import { SUCCESS, FAILURE } from '../../constants/statuses'

const initialState = {
  cart: []
}

export const cartReducer = createReducer(initialState, {
  ['INCREMENT_IN_CART']: (state, action) => {
    const itemIndex = state.cart.findIndex(
      (obj) => obj.id === action.payload.item.id
    )
    const item = state.cart.filter(
      (obj) => obj.id === action.payload.item.id
    )[0]
    if (item) {
      state.cart[itemIndex].count += 1
    } else {
      state.cart.push({
        ...action.payload.item,
        count: action.payload.item.count ?? 1
      })
    }
  },
  ['DECREMENT_IN_CART']: (state, action) => {
    const item = state.cart.filter((obj) => obj.id === action.payload)[0]
    const itemIndex = state.cart.findIndex((obj) => obj.id === action.payload)
    if (state.cart[itemIndex].count != 1) {
      state.cart[itemIndex].count -= 1
    } else {
      state.cart = state.cart.filter((obj) => obj.id != item.id)
    }
  }
})
