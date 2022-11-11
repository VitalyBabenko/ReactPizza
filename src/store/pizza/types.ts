import { Sorts } from "../filter/types";

export type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "complited",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: Sorts;
  category: number;
  // search: string;
  currentPage: string;
};

export interface PizzasState {
  pizzas: Pizza[];
  status: Status;
}
