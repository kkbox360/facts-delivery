import { act, renderHook } from '@testing-library/react';
import usePeriodJobs from './usePeriodJobs';

beforeAll(() => {
  jest.useFakeTimers();
});
afterAll(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it('should trigger passed in function periodically', async () => {
  const defaultPeriod = 1;
  const func = jest.fn();
  const { result } = renderHook(() => usePeriodJobs(defaultPeriod, func));

  jest.advanceTimersByTime(60000);
  expect(func).toBeCalledTimes(1);

  act(() => {
    result.current.setPeriod(2);
  });

  jest.advanceTimersByTime(120000);
  expect(func).toBeCalledTimes(2);
});
