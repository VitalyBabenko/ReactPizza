import { RootState } from "../store";

export const cartSelector = (state: RootState) => state.cartReducer;

export const samePizzaInCartSelector =
  (title: string | undefined, size: number | undefined, type: string) =>
  (state: RootState) => {
    return state.cartReducer.cartItems.find(
      (cartPiz) =>
        cartPiz.title === title &&
        cartPiz.size === size &&
        cartPiz.type === type
    );
  };
