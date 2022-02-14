import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light'
}

export const themeReducer = createReducer(initialState, {
  ['SET_THEME']: (state, action) => {
    state.theme = action.payload
  }
})
