import { ItemsType } from './news';

export type UseFechType = {
  data: {
    count: number,
    page: number,
    totalPages: number,
    nextPage: number,
    previousPage: number,
    showingFrom: number,
    showingTo: number,
    items: ItemsType[];
  } | undefined,
  error: Error,
  loading: boolean,
};
