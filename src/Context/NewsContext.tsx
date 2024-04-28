import { createContext } from 'react';
import { ItemsType } from '../types/news';


type NewsContextProps = {
    dataNews: ItemsType[] | undefined;
    error: Error;
    loading: boolean;
    setStorage: (value: ItemsType[]) => void;
    store: ItemsType[];
    handleNewsUpdate: (date: string, dateRange: string) => void;
    toDate: string;
    fromDate: string;
    isSearch: string;
    isQtd: string;
}

export const NewsContext = createContext({} as NewsContextProps);





