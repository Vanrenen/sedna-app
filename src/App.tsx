import React from 'react';
import { ThemeProvider } from 'styled-components';
import Settings from './components/Settings';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Settings />
      </div>
    </ThemeProvider>
  );
};

export default App;
