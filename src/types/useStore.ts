import { NewsType } from "./news"

export type UseStoreType = {
  store: NewsType[];
  setStorage: (value:NewsType) => void;
  clear: () => void;
}