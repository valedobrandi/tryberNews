import { NewsType } from "./news";

export type UseFechType = {
    data: NewsType | undefined;
    error: Error;
    loading: boolean;
  }