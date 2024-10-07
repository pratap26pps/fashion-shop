import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD

=======
>>>>>>> 710f4446ceca3bd48968a1e4fb39c5bb728cb56f
import CartReducer from './slices/Addtocart'
export const store = configureStore({
  reducer: {
    cart:CartReducer,
  },
})
