import { createSlice } from "@reduxjs/toolkit";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../Util/localStorage";

const loadCartState = () => {
  const cart = loadFromLocalStorage() || [];
  return {
    cart,
    cartCount: cart.length,
  };
};
const initialState = loadCartState();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cart.push(action.payload);
        state.cartCount = state.cart.length;
        saveToLocalStorage(state.cart);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cartCount = state.cart.length;
      saveToLocalStorage(state.cart);
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
