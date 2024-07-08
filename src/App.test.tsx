import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';

test('renders App component', () => {
  const { getByText, getByRole } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );

  // Check if the Settings header is rendered
  const header = getByText(/Settings/i);
  expect(header).toBeInTheDocument();

  // Check if the Toggle switch is rendered
  const toggle = getByRole('switch');
  expect(toggle).toBeInTheDocument();
});
