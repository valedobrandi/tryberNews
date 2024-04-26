import { createContext } from 'react';
import { ItemsType } from '../types/news';


type NewsContextProps = {
    dataNews: ItemsType[] | undefined;
    error: Error;
    loading: boolean;
    onSetFetcher: () => void;
    setStorage: (value: ItemsType[]) => void;
    store: ItemsType[];
    handleDate: (date: Date, dateRange:string) => void
}

export const NewsContext = createContext({} as NewsContextProps);





