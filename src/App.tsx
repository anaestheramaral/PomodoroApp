// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Beforeunload } from 'react-beforeunload';
import Routes from './routes';
import GlobalStyle from './styles/global';
import useToggleTheme from './hooks/theme/useToggleTheme';

const App: React.FC = () => {
  const { theme } = useToggleTheme();
  return (
    <Beforeunload onBeforeunload={() => "You'll lose your data!"}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Beforeunload>
  );
};

export default App;
