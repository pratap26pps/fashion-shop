import { configureStore } from '@reduxjs/toolkit'
import { Addtocart } from './slices/Addtocart'
import CartReducer from './slices/Addtocart'
export const store = configureStore({
  reducer: {
    cart:CartReducer,
  },
})