import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/Features";
import ModalReducer from "./features/modelSlice";
import user from "./features/test";
export const store = configureStore({
  reducer: {
    cart: cardReducer,
    modal: ModalReducer, //its confirm and clear function
    log: user,
  },
});
