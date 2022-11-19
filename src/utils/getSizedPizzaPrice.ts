import { Pizza } from "../store/pizza/types";

export const getSizedPizzaPrice = (pizza: Pizza, size: number) => {
  let result = pizza.price;
  switch (size) {
    case 26:
      result = pizza.price;
      break;
    case 30:
      result = pizza.price + 2.5;
      break;
    case 40:
      result = pizza.price + 4.8;
  }
  return Number(result.toFixed(2));
};
