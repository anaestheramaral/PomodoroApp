import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Timer from '../pages/timer/index';
import TimerCopy from '../pages/timer/index-copy';
import Settings from '../pages/settings/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={TimerCopy} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
export default Routes;
