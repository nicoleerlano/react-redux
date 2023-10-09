import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartIsVisible: false };

const cartSlice = createSlice({
  name: "ui",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = cartSlice.actions;

export default cartSlice.reducer;
