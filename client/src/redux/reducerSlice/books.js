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
            debugger;
            const existingCartState = [...state.cartList]
            debugger;
            existingCartState.push(actions.payload)
            debugger;
            return {
                ...state,
                cartList: existingCartState
            }
        },
    },
})

export const { addToCart } = booksSlice.actions;
export default booksSlice.reducer;