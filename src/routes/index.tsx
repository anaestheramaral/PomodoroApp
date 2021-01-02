import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Timer from '../pages/timer/index';
import Settings from '../pages/settings/index';
import About from '../pages/about';
import Menu from '../components/menu/index';
// import { Container } from './styles';

const Routes: React.FC = () => (
  <HashRouter basename="/">
    <Menu />
    <Switch>
      <Route path="/" exact component={Timer} />
      <Route path="/settings" component={Settings} />
      <Route path="/about" component={About} />
    </Switch>
  </HashRouter>
);
export default Routes;
