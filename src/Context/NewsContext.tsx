import { createContext } from 'react';
import { NewsType } from '../types/news';


type NewsContextProps = {
    data: NewsType | undefined;
    error: Error;
    loading: boolean;
    onSetFetcher: (input:string, mode:string) => void  
}

export const NewsContext = createContext({} as NewsContextProps);





