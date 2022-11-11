import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizzas/fetch",
  async (params) => {
    const category = params.category > 0 ? `category=${params.category}&` : "";
    const pagination = `_page=${params.currentPage}&_limit=8&`;
    const sort = params.sortBy;

    const { data } = await axios.get<Pizza[]>(
      `http://localhost:3001/pizzas?${category + pagination + sort}`
    );
    console.log(data);
    return data;
  }
);

// export const fetchPizzaById = createAsyncThunk('pizza/fetchById',
//     async(id:number) => {
//         const {data} = await axios.get()
//     }
// )
