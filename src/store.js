import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/Features";
export const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});
