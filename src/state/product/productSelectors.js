import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.product.cart;

export const selectItemQuantity = createSelector(
  [selectCart, (state, itemId) => itemId],
  (cart, itemId) => {
    const item = cart.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  }
);

export const selectTotalPrice = createSelector(
  [(state) => state.product.cart],
  (cart) => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }
);
