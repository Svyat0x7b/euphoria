import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart-slice';
import wishlistReducer from './wishlist/wishlist-slice';
import userReducer from './user/user-slice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        user: userReducer,
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
