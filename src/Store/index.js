import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, auth: authSlice.reducer },
});
export default store;
