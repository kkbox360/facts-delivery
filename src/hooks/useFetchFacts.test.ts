import { act, renderHook, waitFor } from '@testing-library/react';
import useFetchFacts from './useFetchFacts';

const joke = { id: 123, setup: 'setup', punchline: 'punchline' };

global.fetch = jest
  .fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([joke]),
    })
  )
  .mockImplementationOnce(async () => Promise.reject()) as jest.Mock;

beforeEach(() => {
  // @ts-ignore
  fetch.mockClear();
});

it('handle exception with empty array', async () => {
  const url = 'fakeUrl';
  const postHandle = jest.fn((x) => x);
  const callback = jest.fn();
  const { result } = renderHook(() => useFetchFacts(url, postHandle, callback));

  expect(result.current.isLoading).toBeTruthy();

  await waitFor(() => {
    expect(callback).toHaveBeenCalledTimes(1);
  });

  expect(result.current.facts).toHaveLength(0);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('fakeUrl');
  expect(result.current.isLoading).toBeFalsy();
});

it('should have triggered postHandle and callback, and get fetched data', async () => {
  const url = 'fakeUrl';
  const postHandle = jest.fn((x) => x);
  const callback = jest.fn();
  const { result } = renderHook(() => useFetchFacts(url, postHandle, callback));

  expect(result.current.isLoading).toBeTruthy();

  await waitFor(() => {
    expect(callback).toHaveBeenCalledTimes(1);
  });

  expect(result.current.isLoading).toBeFalsy();
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('fakeUrl');
  expect(postHandle).toBeCalledTimes(1);
  expect(postHandle).toBeCalledWith([joke]);
  expect(callback).toBeCalledTimes(1);
  expect(callback).toBeCalledWith(result.current.facts);
  expect(result.current.facts).toHaveLength(1);
});

it('should fetch again when triggered forceReload', async () => {
  const url = 'fakeUrl';
  const postHandle = jest.fn((x) => x);
  const callback = jest.fn();
  const { result } = renderHook(() => useFetchFacts(url, postHandle, callback));

  expect(result.current.isLoading).toBeTruthy();

  await waitFor(() => {
    expect(callback).toHaveBeenCalledTimes(1);
  });

  expect(result.current.isLoading).toBeFalsy();

  act(() => {
    result.current.forceReload();
  });

  await waitFor(() => {
    expect(callback).toHaveBeenCalledTimes(2);
  });

  expect(result.current.isLoading).toBeFalsy();
  expect(postHandle).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledTimes(2);
});
