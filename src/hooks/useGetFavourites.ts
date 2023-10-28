import { useEffect, useState } from 'react';
import { getFavourite } from '../lib/ipc';

const useGetFavourites = () => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavourite()
      .then((facts) => setFacts(facts))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { facts, setFacts, isLoading };
};

export default useGetFavourites;
