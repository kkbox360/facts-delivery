window.require = require;
import { waitFor } from '@testing-library/react';
import { saveFavourite, deleteFavourite, getFavourite } from './ipc';
const { ipcRenderer } = require('electron');

jest.mock(
  'electron',
  () => {
    const mElectron = {
      ipcRenderer: { invoke: jest.fn(() => Promise.resolve()) },
    };
    return mElectron;
  },
  { virtual: true }
);

beforeEach(() => {
  // @ts-ignore
  ipcRenderer.invoke.mockClear();
});

it('should have invoke "save-favourite" event when triggered saveFavourite', async () => {
  const factId = 'testId';
  const text = 'testText';
  saveFavourite(factId, text);
  waitFor(() => {
    expect(ipcRenderer.invoke).toHaveBeenCalledTimes(1);
  });
  expect(ipcRenderer.invoke).toHaveBeenCalledWith(
    'save-favourite',
    factId,
    text
  );
});

it('should have invoke "delete-favourite" event when triggered deleteFavourite', async () => {
  const factId = 'testId';
  deleteFavourite(factId);
  waitFor(() => {
    expect(ipcRenderer.invoke).toHaveBeenCalledTimes(1);
  });
  expect(ipcRenderer.invoke).toHaveBeenCalledWith('delete-favourite', factId);
});

it('should have invoke "get-favourite" event when triggered getFavourite', async () => {
  getFavourite();
  waitFor(() => {
    expect(ipcRenderer.invoke).toHaveBeenCalledTimes(1);
  });
  expect(ipcRenderer.invoke).toHaveBeenCalledWith('get-favourite');
});
