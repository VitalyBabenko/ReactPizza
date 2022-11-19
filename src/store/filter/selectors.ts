import { RootState } from "../store";

export const filterSelector = (state: RootState) => state.filterReducer;
export const sortSelector = (state: RootState) => state.filterReducer.sort;
