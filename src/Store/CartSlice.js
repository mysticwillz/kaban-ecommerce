import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.itemsList.quantity;
      console.log(state.totalQuantity);

      state.itemsList = action.payload.itemsList;
    },

    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          para: newItem.para,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
        state.totalQuantity++;
      }
      localStorage.setItem("CART", JSON.stringify(state.itemsList));
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        return;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      localStorage.setItem("CART", JSON.stringify(state.itemsList));
    },
    deleteFromCart(state, action) {
      const id = action.payload;

      state.itemsList = state.itemsList.filter((item) => item.id !== id);
      state.totalQuantity--;
      localStorage.setItem("CART", JSON.stringify(state.itemsList));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
