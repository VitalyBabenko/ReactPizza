import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Sorts, SortType } from "./types";
import { RootState } from "../store";

const initialState: FilterState = {
  categoryId: 0,
  searchValue: "",
  sort: { name: "популярности", property: Sorts.RATING },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    changeSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterState>) {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const filterSelector = (state: RootState) => state.filterReducer;
export const sortSelector = (state: RootState) => state.filterReducer.sort;

export const {
  changeCategory,
  changeSearchValue,
  changeSort,
  changeCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
