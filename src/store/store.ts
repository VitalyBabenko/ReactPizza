import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/filterSlice";
import cartReducer from "./cart/cartSlice";
import pizzasReducer from "./pizza/pizzasSlice";

const rootReducer = combineReducers({
  pizzasReducer,
  filterReducer,
  cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
