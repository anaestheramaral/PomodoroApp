import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from '../pages/timer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Timer} />
  </Switch>
);
export default Routes;
