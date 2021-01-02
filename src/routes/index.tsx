import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from '../pages/timer/index';
import Settings from '../pages/settings/index';
import About from '../pages/about';
// import Navbar from '../components/navbar';
import Menu from '../components/menu/index';
import { Container } from './styles';

const Routes: React.FC = () => (
  <Container>
    {/* <Navbar /> */}
    <Menu />
    <Switch>
      <Route path="/" exact component={Timer} />
      <Route path="/settings" component={Settings} />
      <Route path="/about" component={About} />
    </Switch>
  </Container>
);
export default Routes;
