import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setTotalCount } from "./slice";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizzas/fetch",
  async (params, thunkAPI) => {
    const { q, _sort, _order, category, _page } = params;
    const resp = await axios.get<Pizza[]>(`http://localhost:3001/pizzas`, {
      params: { q, _sort, _order, _page, _limit: 8, category },
    });
    thunkAPI.dispatch(setTotalCount(Number(resp.headers["x-total-count"])));
    return resp.data;
  }
);
