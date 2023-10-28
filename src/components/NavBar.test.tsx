import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';

const bars = [
  { to: '/', label: 'Feed' },
  { to: '/favourite', label: 'Favourites' },
];

describe('<NavBar />', () => {
  it(`should list links for each bar passed in`, async () => {
    const props = {
      bars,
    };
    render(
      <HashRouter>
        <NavBar {...props} />
      </HashRouter>
    );

    bars.forEach((bar) => {
      expect(screen.getByText(bar.label)).toBeInTheDocument();
    });
  });
});
