import { CartPizza } from "../store/cart/types";

export const getTotalCount = (arr: CartPizza[]) => {
  return arr.reduce((sum, item) => sum + item.count, 0);
};
