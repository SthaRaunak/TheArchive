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
            console.log(state.cartList)
            const itemIndex = state.cartList.findIndex((item) => item._id == actions.payload._id)

            if (itemIndex !== -1) {
                state.cartList[itemIndex].quantity++;
                state.cartList[itemIndex].totalBookPrice = state.cartList[itemIndex].bookPrice * state.cartList[itemIndex].quantity;
            } else {
                actions.payload.quantity = 1;
                actions.payload.totalBookPrice = actions.payload.bookPrice * actions.payload.quantity;
                state.cartList.push(actions.payload)
            }

            return state;
        },


        removeFromCart(state, action) {
            const removeItemId = action.payload;
            const existingCartState = [...state.cartList]
            const UpdatedCartState = existingCartState.filter((item) => item._id !== removeItemId)
            return {
                ...state,
                cartList: UpdatedCartState,
            }
        },


        IncreaseQuantity(state, actions) {
            const itemIndex = state.cartList.findIndex((item) => item._id == actions.payload._id)
            if (itemIndex !== -1) {
                state.cartList[itemIndex].quantity++;
                state.cartList[itemIndex].totalBookPrice = state.cartList[itemIndex].bookPrice * state.cartList[itemIndex].quantity;
            }
            return state;
        },


        DecrementQuantity(state, actions) {
            const itemIndex = state.cartList.findIndex((item) => item._id == actions.payload._id)
            if (itemIndex !== -1) {
                if (state.cartList[itemIndex].quantity > 1) {
                    state.cartList[itemIndex].quantity--;
                    state.cartList[itemIndex].totalBookPrice = state.cartList[itemIndex].bookPrice * state.cartList[itemIndex].quantity;
                }
            }
            return state;
        }


    },

})

export const { addToCart, removeFromCart, IncreaseQuantity, DecrementQuantity } = booksSlice.actions;
export default booksSlice.reducer;