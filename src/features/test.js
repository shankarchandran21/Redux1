import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  user: "Shankar",
};

const cardSlice = createSlice({
  name: "user",
  initialState,
});

export default cardSlice.reducer;
