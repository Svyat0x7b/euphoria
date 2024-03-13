import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type {ProductType} from '../../components/women/product-list';

type WishlistStateType = {
  items: ProductType[],
}

const initialState: WishlistStateType = {
    items: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductType>) => {
        const findItem = state.items.find((item: ProductType) => item.id === action.payload.id)
        if(findItem) {
          return;
        } 
        
        state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
        const findItem = state.items.find((item: ProductType) => item.id === action.payload)

        if(!findItem) return;

        state.items = state.items.filter((item: ProductType) => item.id !== action.payload)
    },
    clearWishlist: (state) => {
        state.items = [];
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist} = wishlistSlice.actions

export const selectWishlist = (state: RootState) => state.wishlist.items;



export default wishlistSlice.reducer