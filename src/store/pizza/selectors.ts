import { RootState } from "../store";

export const pizzasSelector = (state: RootState) => state.pizzasReducer;
