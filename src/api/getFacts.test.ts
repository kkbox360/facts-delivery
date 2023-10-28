import { getFacts } from './getFacts';

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
  const data = await getFacts(url);

  expect(data).toHaveLength(0);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('fakeUrl');
});

it('fetch data successfully', async () => {
  const url = 'fakeUrl';
  const data = await getFacts(url);

  expect(data).toHaveLength(1);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('fakeUrl');
  expect(data[0].id).toBe(joke.id);
  expect(data[0].setup).toBe(joke.setup);
  expect(data[0].punchline).toBe(joke.punchline);
});
