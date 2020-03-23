import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import NewActivity from '../pages/New Activity';
import ViewActivity from '../pages/View Activity';
import FullActivity from '../pages/View Activity/Full Activity';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewActivity} />
      <Route path="/view" component={ViewActivity} />
      <Route path="/full-activity" component={FullActivity} />
    </Switch>
  );
}
