import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../state/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
