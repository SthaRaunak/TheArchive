import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    cartList: [],
    wishlist: []
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addToCart(state, actions) {
                const existingCartState = [...state.cartList]
                existingCartState.push(actions.payload)
                return{
                    ...state,
                    cartList: existingCartState
                }
        },
    },
})

export const { addToCart } = booksSlice.actions;
export default booksSlice.reducer;