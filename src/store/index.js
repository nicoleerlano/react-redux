import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ui-slice";

const store = configureStore({
  reducer: { ui: cartReducer },
});

export default store;
