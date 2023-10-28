window.require = require;
import { renderHook, waitFor } from '@testing-library/react';
const { ipcRenderer } = require('electron');
import useGetFavourites from './useGetFavourites';

const favourites = [{ id: 123, text: 'text' }];

jest.mock(
  'electron',
  () => {
    const mElectron = {
      ipcRenderer: { invoke: jest.fn(() => Promise.resolve(favourites)) },
    };
    return mElectron;
  },
  { virtual: true }
);

beforeEach(() => {
  // @ts-ignore
  ipcRenderer.invoke.mockClear();
});

it('should get favourites from ipcRenderer', async () => {
  const { result } = renderHook(() => useGetFavourites());

  expect(result.current.isLoading).toBeTruthy();

  await waitFor(() => {
    expect(result.current.isLoading).toBeFalsy();
  });

  expect(result.current.facts).toEqual(favourites);
});
