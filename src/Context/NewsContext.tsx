import { createContext, useState } from 'react';
import { NewsType } from '../types/news';
import useFetch from '../Hooks/useFetch';

type NewsContextProps = {
    data: NewsType | undefined;
    error: Error;
    loading: boolean;
    search: string;
}

export const NewsContext = createContext({} as NewsContextProps);

type UseFechType = {
    data: NewsType | undefined;
    error: Error;
    loading: boolean;
  }

type NewsProviderType = {
  children: React.ReactNode;
};


export function NewsProvider({ children }: NewsProviderType) {
    const {search, setSearch} = useState(
        {byQty: "qtd=100", byWord: {"?busca=": ""}}
      )
      const { data, error, loading } = useFetch(
        'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100') as UseFechType

      

  return (
    <NewsContext.Provider
      value={{data, error, loading, search}}
    >
      {children}
    </NewsContext.Provider>
  );
}

