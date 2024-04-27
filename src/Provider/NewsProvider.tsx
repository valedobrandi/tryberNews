import { useState } from "react";
import { NewsProviderType } from "../types/newsProvider";
import useFetch from "../Hooks/useFetch";
import { UseFechType } from "../types/useFetch";
import { NewsContext } from "../Context/NewsContext";
import { newsHandling } from "../utils/newsHandling";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ItemsType } from "../types/news";
const queryParamsSearch = {
  de: '',
  qtd: '5',
  page: '1',
  ate: '',
  busca: ''
};

export default function NewsProvider({ children }: NewsProviderType) {
  const [queryParams, setQueryParams] = useState(queryParamsSearch)

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `https://servicodados.ibge.gov.br/api/v3/noticias/`;


  const { setStorage, store } = useLocalStorage<ItemsType[]>("favoriteNews", [])


  const { data, error, loading } = useFetch(`${url}?${queryString}`, queryParams) as UseFechType
  const isNews = data && "items" in data
  let dataNews = isNews ? newsHandling(data) : undefined


  if (dataNews) {
    dataNews = dataNews.slice().sort((a, b) => Number(a.data_publicacao) - Number(b.data_publicacao))
  }

  const handleDate = (input: string, key: string) => {
    const updateState = { ...queryParams, [key]: input }
    const changeDateFormat = input.slice(0, 10).split("-")
    const setFormatDate = input === '' 
    ? ''
    :`${changeDateFormat[1]}-${changeDateFormat[2]}-${changeDateFormat[0]}`

    if (key === "busca") {return setQueryParams(updateState)}
  
      setQueryParams({ ...queryParams, [key]: setFormatDate })
  };

  const toDate = queryParams.ate
  const fromDate = queryParams.de
  const isSearch = queryParams.busca
  return (
    <NewsContext.Provider
      value={{
        dataNews,
        error,
        loading,
        setStorage,
        store,
        handleDate,
        toDate,
        fromDate,
        isSearch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}