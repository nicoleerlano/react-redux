import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
