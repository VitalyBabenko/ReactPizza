import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartPizza, CartState } from "./types";

const initialState: CartState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartPizza>) {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce(
        (sum, pizza) => pizza.price * pizza.count + sum,
        0
      );
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );

      state.totalPrice = state.cartItems.reduce(
        (sum, pizza) => pizza.price * pizza.count + sum,
        0
      );
    },
    clearItems(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },

    minusCount(state, action: PayloadAction<number>) {
      const currentPizza = state.cartItems.find(
        (pizza) => pizza.id === action.payload
      );
      if (currentPizza) {
        currentPizza.count--;
        state.totalPrice = state.cartItems.reduce(
          (sum, pizza) => pizza.price * pizza.count + sum,
          0
        );
      }
    },
  },
});

export const cartSelector = (state: RootState) => state.cartReducer;

export const cartItemByIdSelector = (id: number) => (state: RootState) =>
  state.cartReducer.cartItems.find((pizza) => pizza.id === id);

export const { addItem, removeItem, clearItems, minusCount } =
  cartSlice.actions;

export default cartSlice.reducer;
