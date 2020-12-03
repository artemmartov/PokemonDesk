import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = <T>(
  endpoint: string,
  query: { [key: string]: number | string },
  deps: any[] = [],
): Record<string, unknown> => {
  const [data, setData] = useState<T | null | void | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const data = await req<T>(endpoint, query);
        setData(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);
  return { data, isLoading, isError };
};

export default useData;
