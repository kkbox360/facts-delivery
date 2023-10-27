import { useEffect, useReducer, useState } from 'react';

import { getFacts } from '../api/getFacts';
import { notify } from '../lib/notification';

const useFetchFacts = (type: string = 'cat', amount: number = 1) => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, forceReload] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getFacts(type, amount)
      .then((facts) => setFacts(facts))
      .finally(() => {
        console.log('here i am', facts);
        facts[0] && notify('New cat facts!', facts[0].text);
        setIsLoading(false);
      });
  }, [refresh]);

  return { facts, isLoading, forceReload };
};

export default useFetchFacts;
