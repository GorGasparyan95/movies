import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import { IJsonData, TUseFetchData, JsonItem } from '../types/hooks';

import { useSessionStorage } from './useSessionStorage';

const useFetchData: TUseFetchData = (url: string, id: string | undefined) => {
  const [data, setData] = useState<IJsonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [play, setPlay] = useState<boolean>(false);

  const { setItem } = useSessionStorage();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        const result = (await response.json()) as IJsonData;
        const limitedTendingNow = result.TendingNow.slice(0, 50).sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)));
        if (id) {
          setItem('id', id);
          setPlay(false);
          const trendingById = limitedTendingNow?.find((item) => item.Id === id) as JsonItem;
          const filteredtrendings = limitedTendingNow.filter((item) => item.Id !== id);
          setData({
            Featured: trendingById,
            TendingNow: [trendingById, ...filteredtrendings],
          });
          setTimeout(() => {
            setPlay(true);
          }, 2000);
        } else {
          setData({
            Featured: result.Featured,
            TendingNow: limitedTendingNow,
          });
        }
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [url, id]);

  return { data, loading, error, play };
};

export default useFetchData;
