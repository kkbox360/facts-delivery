import { notify } from './notification';

//@ts-ignore
global.Notification = jest.fn(() => ({})) as jest.Mock;

it('should work normally', async () => {
  const title = 'title';
  const body = 'body';
  const onClick = jest.fn();
  expect(() => notify(title, body, onClick)).not.toThrowError();
});
