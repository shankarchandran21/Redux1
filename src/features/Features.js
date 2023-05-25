import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState = {
  cartItems: data,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

console.log(cardSlice);

export const { clearCart, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
