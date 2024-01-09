import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type {ProductType} from '../../components/women/product-list';

export type CartItemType = {
    product: ProductType,
    amount: number,
}

type CartStateType = {
  items: CartItemType[],
  totalPrice: number,
  totalAmount: number,
}

const initialState: CartStateType = {
    items: [],
    totalPrice: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
        const findItem = state.items.find((item: CartItemType) => item.product.id === action.payload.id)
        if(findItem) {
            findItem.amount += 1;
        } else {
            state.items.push({product: action.payload, amount: 1});
        }

        state.totalAmount += 1;
        state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
        const findItem = state.items.find((item: CartItemType) => item.product.id === action.payload)

        if(!findItem) return;

        state.totalAmount -= findItem.amount;
        state.totalPrice -= findItem.amount * findItem.product.price;
        state.items = state.items.filter((item: CartItemType) => item.product.id !== action.payload)
    },
    incrementProductAmount: (state, action: PayloadAction<string>) => {
        const findItem = state.items.find((item: CartItemType) => item.product.id === action.payload)
        if(findItem) {
            findItem.amount += 1;
            state.totalAmount += 1;
            state.totalPrice += findItem.product.price;
        } 

    },
    decrementProductAmount: (state, action: PayloadAction<string>) => {
        const findItem = state.items.find((item: CartItemType) => item.product.id === action.payload)


        if(findItem) {
            state.totalAmount -= 1;
            state.totalPrice -= findItem.product.price;
            if(findItem.amount > 1) {
                findItem.amount -= 1;
            } else {
                state.items = state.items.filter((item: CartItemType) => item.product.id !== action.payload)
            }
        } 
    },
    clearCart: (state) => {
        state.items = [];
        state.totalAmount = 0;
        state.totalPrice = 0;
    },
  },
})

export const { addToCart, removeFromCart, incrementProductAmount, decrementProductAmount, clearCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.items;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount;


export default cartSlice.reducer