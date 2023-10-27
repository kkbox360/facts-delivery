import { useEffect, useReducer, useState } from 'react';

import { getFacts } from '../api/getFacts';

const useFetchFacts = (
  url: string,
  postHandle = (item: object[]) => item,
  callback?: (item: object) => void
) => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, forceReload] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getFacts(url)
      .then((facts) => {
        facts = postHandle(facts);
        setFacts(facts);
        callback(facts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refresh]);

  return { facts, isLoading, forceReload };
};

export default useFetchFacts;
