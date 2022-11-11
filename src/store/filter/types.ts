export enum Sorts {
  RATING = "_sort=rating&_order=desc",
  PRICE_DESC = "_sort=price&_order=desc",
  PRICE_ASC = "_sort=price&_order=asc",
  TITLE = "_sort=title&_order=asc",
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
