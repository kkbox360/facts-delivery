import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Select from './Select';

const options = [
  { value: '5', text: 'Every 5 minutes' },
  { value: '10', text: 'Every 10 minutes' },
  { value: '30', text: 'Every 30 minutes' },
  { value: '60', text: 'Every 60 minutes' },
  { value: '20000', text: 'Every 20000 minutes' },
];

describe('<Select />', () => {
  it(`should list links for each bar passed in`, async () => {
    const props = {
      label: 'test label',
      options,
      onChange: jest.fn(),
    };
    render(<Select {...props} />);

    expect(screen.getByText('test label')).toBeInTheDocument();
    options.forEach((option) =>
      expect(screen.getByText(option.text)).toBeInTheDocument()
    );
  });
  it(`should trigger onChange when selected changed`, async () => {
    const props = {
      label: 'test label',
      options,
      onChange: jest.fn(),
    };
    const { getByTestId, getAllByTestId } = render(<Select {...props} />);
    fireEvent.change(getByTestId('select'), { target: { value: '20000' } });
    let renderedOptions = getAllByTestId('select-option') as any;
    expect(renderedOptions[0].selected).toBeFalsy();
    expect(renderedOptions[1].selected).toBeFalsy();
    expect(renderedOptions[2].selected).toBeFalsy();
    expect(renderedOptions[3].selected).toBeFalsy();
    expect(renderedOptions[4].selected).toBeTruthy();
    expect(props.onChange).toBeCalledTimes(1);
  });
});
