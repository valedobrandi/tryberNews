import { useEffect, useState } from 'react';


function useFetch(url:string) {
  const [data, setData] = useState();
  const [error, SetError] = useState<Error>();
  const [loading, setLoading] = useState(true);
  
 
  
  const queryParams = {
    qtd: '20',
    page: '1',
    de: '',
    ate: '',
  };
  
  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = `${url}?${queryString}`;

 useEffect(() => {
   const fetchData = async () => {
     setLoading(true);
     try {
       const request = await fetch(fullUrl);
        const response = await request.json();
     
           
        setData(response);
      } catch (err) {
        if (err instanceof Error) SetError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  },[url])

  return { data, error, loading, setData };
}

export default useFetch;
