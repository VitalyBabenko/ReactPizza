export enum Sorts {
  RATING = "rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  TITLE = "-title",
}

export type SortType = {
  name: string;
  property: Sorts;
};

export interface FilterState {
  categoryId: number;
  searchValue: string;
  sort: SortType;
  currentPage: number;
}
