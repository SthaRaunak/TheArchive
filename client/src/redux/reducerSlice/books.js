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
            debugger

            console.log(state.cartList)
            debugger
            const itemIndex = state.cartList.findIndex((item)=> item._id == actions.payload._id)
            debugger
            if(itemIndex !== -1){
                state.cartList[itemIndex].quantity++;
            }else{
                actions.payload.quantity = 1;
                state.cartList.push(actions.payload)
            }
            
       
            return state;
        },
        removeFromCart(state,action){
            const removeItemId = action.payload;
            const existingCartState = [...state.cartList]
            const UpdatedCartState = existingCartState.filter((item)=>item._id !== removeItemId) 
            return{
                ...state,
                cartList: UpdatedCartState,
            }
        }
    },
})

export const { addToCart,removeFromCart } = booksSlice.actions;
export default booksSlice.reducer;