import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    changed: false,
  },
  reducers: {
    authChange(state) {
      state.changed = !state.changed;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
