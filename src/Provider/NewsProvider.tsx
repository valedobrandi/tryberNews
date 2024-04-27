import { useRef, useState } from "react";
import { NewsProviderType } from "../types/newsProvider";
import useFetch from "../Hooks/useFetch";
import { UseFechType } from "../types/useFetch";
import { NewsContext } from "../Context/NewsContext";
import { newsHandling } from "../utils/newsHandling";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ItemsType } from "../types/news";
const queryParams = {
  de: '',
  qtd: '5',
  page: '1',
  ate: '',
  busca: ''
};

export default function NewsProvider({ children }: NewsProviderType) {
  const useQueryParams = useRef(queryParams)

  const queryString = new URLSearchParams(useQueryParams.current).toString();
  const url = `https://servicodados.ibge.gov.br/api/v3/noticias/`;


  const { setStorage, store } = useLocalStorage<ItemsType[]>("favoriteNews", [])
  const [fetcher, setFetcher] = useState(`${url}?${queryString}`)

  const { data, error, loading } = useFetch(fetcher) as UseFechType
  const isNews = data && "items" in data
  let dataNews = isNews ? newsHandling(data) : undefined


  function onSetFetcher() {
    const queryString = new URLSearchParams(useQueryParams.current).toString();
    setFetcher(`${url}?${queryString}`);
  }

  if (dataNews) {
    dataNews = dataNews.slice().sort((a, b) => Number(a.data_publicacao) - Number(b.data_publicacao))
  }

  const handleDate = (input: string, key: string) => {
    if (key === "busca") {
      return useQueryParams.current = { ...useQueryParams.current, [key]: input }
    }
    const changeFormat = input.slice(0, 10).split("-")
    const setFormatDate = `${changeFormat[1]}-${changeFormat[2]}-${changeFormat[0]}`
    useQueryParams.current = { ...useQueryParams.current, [key]: setFormatDate }
  };

  const toDate = useQueryParams.current.ate
  const fromDate = useQueryParams.current.de
  return (
    <NewsContext.Provider
      value={{
        dataNews,
        error,
        loading,
        onSetFetcher,
        setStorage,
        store,
        handleDate,
        toDate,
        fromDate,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}