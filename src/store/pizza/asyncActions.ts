import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setTotalCount } from "./slice";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizzas/fetch",
  async (params, thunkAPI) => {
    const { title, sortBy, order, category, page } = params;
    const { data } = await axios.get(
      `https://6380caf6786e112fe1ba2b6e.mockapi.io/pizzas`,
      {
        params: { title, sortBy, order, page, limit: 8, category },
      }
    );
    const pizzas: Pizza[] = data.items;
    const count: number = Number(data.count);
    thunkAPI.dispatch(setTotalCount(count));
    return pizzas;
  }
);
