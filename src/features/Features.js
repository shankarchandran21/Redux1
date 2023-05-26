import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import axios from "axios";
import { openModel } from "./modelSlice";
let url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
//Api data using async
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (random, thunkAPI) => {
    try {
      //thuckAPI have every state and dispatch also
      console.log(random); //argument value
      console.log(thunkAPI);
      console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModel());

      const res = await axios(url);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
// **************************************************************************************
const cardSlice = createSlice({
  name: "cart", //name for feature
  initialState, //data
  //reducer actions
  // in reducer in action props have payload whatever we send as argument it store in payload only
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
      state.cartItems = state.cartItems.filter((item) => item.amount > 0);
    },
    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems?.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  //api call extrareducer builder is default props
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload; //seting up cart items
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     console.log(action);
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     console.log(action);
  //     state.isLoading = false;
  //   },
  // },
});

console.log(cardSlice);

//actions from reducer
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cardSlice.actions;
//it's from store it import reducer and it will have initialState to pass value in store file
export default cardSlice.reducer;
