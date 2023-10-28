import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Fact from './Fact';

describe('<Fact />', () => {
  it(`should show loading when it's loading`, async () => {
    const props = {
      facts: [] as { id: string; text: string }[],
      isLoading: true,
      showFavourite: true,
      showDelete: true,
    };
    render(<Fact {...props} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it(`should show "Something went wrong." when there's no facts`, async () => {
    const props = {
      facts: [] as { id: string; text: string }[],
      isLoading: false,
      showFavourite: true,
      showDelete: true,
    };
    render(<Fact {...props} />);

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
  it(`should trigger favouriteHandle when clicked`, async () => {
    const props = {
      facts: [{ id: '123', text: 'text' }] as { id: string; text: string }[],
      isLoading: false,
      showFavourite: true,
      showDelete: true,
      favouriteHandle: jest.fn(),
      deleteHandle: jest.fn(),
    };
    render(<Fact {...props} />);

    await userEvent.click(screen.getByText('♥'));
    expect(props.favouriteHandle).toBeCalledTimes(1);
  });
  it(`should trigger deleteHandle when clicked`, async () => {
    const props = {
      facts: [{ id: '123', text: 'text' }] as { id: string; text: string }[],
      isLoading: false,
      showFavourite: true,
      showDelete: true,
      favouriteHandle: jest.fn(),
      deleteHandle: jest.fn(),
    };
    render(<Fact {...props} />);

    await userEvent.click(screen.getByText('𝖷'));
    expect(props.deleteHandle).toBeCalledTimes(1);
  });
});
