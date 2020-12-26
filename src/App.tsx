// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';

import useToggleTheme from './hooks/useToggleTheme';

const App: React.FC = () => {
  // const [theme, setTheme] = useState(light);

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };

  const { theme } = useToggleTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
