import { configureStore } from '@reduxjs/toolkit'

import CartReducer from './slices/Addtocart'
export const store = configureStore({
  reducer: {
    cart:CartReducer,
  },
})