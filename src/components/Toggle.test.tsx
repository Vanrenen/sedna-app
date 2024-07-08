import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from './Toggle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

test('renders Toggle component', () => {
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <Toggle onToggle={() => {}} />
    </ThemeProvider>
  );

  const toggle = getByRole('switch');
  expect(toggle).toBeInTheDocument();
});

test('toggles state on click', () => {
  const handleToggle = jest.fn();
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <Toggle onToggle={handleToggle} />
    </ThemeProvider>
  );

  const toggle = getByRole('switch');
  fireEvent.click(toggle);

  expect(handleToggle).toHaveBeenCalledWith(true);
  fireEvent.click(toggle);
  expect(handleToggle).toHaveBeenCalledWith(false);
});
