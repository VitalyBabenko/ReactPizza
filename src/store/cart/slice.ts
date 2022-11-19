import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartPizza, CartState } from "./types";

const initialState: CartState = {
  cartItems: getCartFromLS(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartPizza>) {
      const findItem = state.cartItems.find(
        (pizza) =>
          pizza.title === action.payload.title &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          id: state.cartItems.length,
          count: 1,
        });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearItems(state) {
      state.cartItems = [];
    },

    minusCount(state, action: PayloadAction<number>) {
      const currentPizza = state.cartItems.find(
        (pizza) => pizza.id === action.payload
      );
      if (currentPizza) {
        currentPizza.count--;
      }
    },
  },
});

export const { addItem, removeItem, clearItems, minusCount } =
  cartSlice.actions;

export default cartSlice.reducer;
