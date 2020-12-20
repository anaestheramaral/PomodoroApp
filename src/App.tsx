// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
