import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  userName: "Shankar",
});

const user = createSlice({
  name: "user",
  userName: "Shankar",
});

export default cardSlice.reducer;
