import { CartPizza } from "../store/cart/types";

export const getTotalPrice = (arr: CartPizza[]) => {
  const result = arr.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  return Number(result.toFixed(2));
};
