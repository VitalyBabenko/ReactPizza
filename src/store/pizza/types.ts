export type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  ingredients: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "complited",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: string;
  order: "asc" | "desc";
  category: string | undefined;
  title: string | undefined;
  page: number;
};

export interface PizzasState {
  pizzas: Pizza[];
  totalCount: number;
  status: Status;
}
