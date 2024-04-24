import { createContext } from 'react';
import { ItemsType } from '../types/news';


type NewsContextProps = {
    dataNews: ItemsType[] | undefined;
    error: Error;
    loading: boolean;
    onSetFetcher: (input: string, mode: string) => void
}

export const NewsContext = createContext({} as NewsContextProps);





