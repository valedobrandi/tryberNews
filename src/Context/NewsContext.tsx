import { createContext } from 'react';
import { ItemsType } from '../types/news';


type NewsContextProps = {
    dataNews: ItemsType[] | undefined;
    error: Error;
    loading: boolean;
    onSetFetcher: () => void;
    setStorage: (value: ItemsType[]) => void;
    store: ItemsType[];
    handleDate: (date: string, dateRange: string) => void;
    toDate: string;
    fromDate: string;
}

export const NewsContext = createContext({} as NewsContextProps);





