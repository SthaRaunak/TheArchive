import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartList: [],
  wishlist: []
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    //Adding Book to Cart
    addToCart(state, actions) {
      const itemIndex = state.cartList.findIndex((item) => item._id === actions.payload._id);
      if (itemIndex !== -1) {
        //Book already exists in the cart
        return {
          ...state,
          cartList: state.cartList.map((item, index) => {
            if (index === itemIndex) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalBookPrice: item.bookPrice * (item.quantity + 1),
              };
            }
            return item;
          }),
        };
      } else {
        //Book does not exists in the cart
        const newItem = {
          ...actions.payload,
          quantity: 1,
          totalBookPrice: actions.payload.bookPrice,
        };

        return {
          ...state,
          cartList: [...state.cartList, newItem],
        };
      }
    },

    //Removing Book from cart 
    removeFromCart(state, action) {
      const removeItemId = action.payload;
      const existingCartState = [...state.cartList]
      const UpdatedCartState = existingCartState.filter((item) => item._id !== removeItemId)
      return {
        ...state,
        cartList: UpdatedCartState,
      }
    },
    //Removing All Item From Cart
    removeAllFromCart(state, action) {
      state.cartList = [];
      return state;
    },

    //Increasing Book quantity
    IncreaseQuantity(state, actions) {
      const itemIndex = state.cartList.findIndex((item) => item._id == actions.payload._id)
      if (itemIndex !== -1) {
        state.cartList[itemIndex].quantity++;
        state.cartList[itemIndex].totalBookPrice = state.cartList[itemIndex].bookPrice * state.cartList[itemIndex].quantity;
      }
      return state;
    },

    //Decreasing Book quantity
    DecrementQuantity(state, actions) {
      const itemIndex = state.cartList.findIndex((item) => item._id == actions.payload._id)
      if (itemIndex !== -1) {
        if (state.cartList[itemIndex].quantity > 1) {
          state.cartList[itemIndex].quantity--;
          state.cartList[itemIndex].totalBookPrice = state.cartList[itemIndex].bookPrice * state.cartList[itemIndex].quantity;
        }
      }
      return state;
    },
    //Adding Book to the Wishlist
    addToWishlist(state, action) {
      const itemIndex = state.wishlist.findIndex((item) => item._id == action.payload._id)
      if (itemIndex == -1) {
        state.wishlist.push(action.payload)
      }
      return state;
    },

    //Removing Book from wishlist
    removeWishlist(state, action) {
      debugger;
      const removeItemId = action.payload._id;
      const existingWishlistState = [...state.wishlist]
      const UpdateWishList = existingWishlistState.filter((item) => item._id !== removeItemId)
      return {
        ...state,
        wishlist: UpdateWishList,
      }

    }
  },

})

export const { addToCart, removeFromCart, IncreaseQuantity, DecrementQuantity, addToWishlist, removeWishlist, removeAllFromCart } = booksSlice.actions;
export default booksSlice.reducer;