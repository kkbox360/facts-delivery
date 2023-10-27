import { useEffect, useState } from 'react';
import { getFavorite } from '../lib/ipc';

const useGetFavorites = () => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavorite()
      .then((facts) => setFacts(facts))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { facts, setFacts, isLoading };
};

export default useGetFavorites;
