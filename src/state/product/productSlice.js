import { createSlice } from "@reduxjs/toolkit";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../Util/localStorage";
const loadCartState = () => {
  const cart = loadFromLocalStorage() || [];
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  return {
    cart,
    cartCount,
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
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount = state.cart.reduce(
        (count, item) => count + item.quantity,
        0
      );
      saveToLocalStorage(state.cart);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cartCount = state.cart.length;
      saveToLocalStorage(state.cart);
    },

    deleteParticularItemsCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cartCount = state.cart.reduce(
        (count, item) => count + item.quantity,
        0
      );
      saveToLocalStorage(state.cart);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.cartCount = state.cart.reduce(
        (count, item) => count + item.quantity,
        0
      );
      saveToLocalStorage(state.cart);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
        state.cartCount = state.cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
        saveToLocalStorage(state.cart);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.cartCount = 0; // Ensure cart count is reset
      saveToLocalStorage(state.cart);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  deleteParticularItemsCart,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
