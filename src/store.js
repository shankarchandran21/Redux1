import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/Features";
import user from "./features/test";
export const store = configureStore({
  reducer: {
    cart: cardReducer,
    log: user,
  },
});
