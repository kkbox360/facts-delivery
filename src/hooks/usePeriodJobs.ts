import { useEffect, useState } from 'react';

const usePeriodJobs = (
  defaultPeriod: number | string = 5,
  func: () => void
) => {
  const [period, setPeriod] = useState(defaultPeriod);

  useEffect(() => {
    const interval = setInterval(func, Number(period) * 1000 * 60);
    return () => clearInterval(interval);
  }, [period]);

  return { setPeriod };
};

export default usePeriodJobs;
