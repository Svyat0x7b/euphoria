import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cart-slice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch