// eslint-disable-next-line no-use-before-define
import React from 'react';
import GlobalStyle from './styles/global';
import Timer from './pages/timer';


const App: React.FC = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Timer />
      <GlobalStyle />
    </>
  );
};

export default App;
