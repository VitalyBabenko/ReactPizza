import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchPizzas } from "./asyncActions";
import { Pizza, PizzasState, Status } from "./types";

const initialState: PizzasState = {
  pizzas: [],
  status: Status.LOADING,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPizzas.pending.type](state) {
      state.status = Status.LOADING;
      state.pizzas = [];
    },

    [fetchPizzas.fulfilled.type](state, action: PayloadAction<Pizza[]>) {
      state.pizzas = action.payload;
      state.status = Status.SUCCESS;
    },
    [fetchPizzas.rejected.type](state) {
      state.status = Status.ERROR;
      state.pizzas = [];
    },
  },
});

export const pizzasSelector = (state: RootState) => state.pizzasReducer;

export default pizzasSlice.reducer;
