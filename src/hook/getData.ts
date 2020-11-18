import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = (endpoint: string, query: Record<string, unknown>, deps: any[] = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log('qqq', query);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await req(endpoint, query);

        setData(data.pokemons);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [deps]);
  return { data, isLoading, isError };
};

export default useData;
