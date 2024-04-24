import { useState } from "react";
import { NewsProviderType } from "../types/newsProvider";
import useFetch from "../Hooks/useFetch";
import { UseFechType } from "../types/useFetch";
import { NewsContext } from "../Context/NewsContext";

export default function NewsProvider({ children }: NewsProviderType) {
    const [fetcher, setFetcher] = useState(
      'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100'
    )
      const { data, error, loading } = useFetch(fetcher) as UseFechType
   
    
  function onSetFetcher(input: string, mode: string) { 
    switch(mode) {
      case "search":
        setFetcher(`https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${input}`);
        break;
      case "all":
        setFetcher('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
        break;
        default:
          break;
    }

  }
    

  return (
    <NewsContext.Provider
      value={{data, error, loading, onSetFetcher}}
    >
      {children}
    </NewsContext.Provider>
  );
}