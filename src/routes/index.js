import React from 'react';
import { Switch } from 'react-router-dom';

import Campaign from '../pages/Campaign';
import NewAtivity from '../pages/Campaign/New Ativity';
import ViewAtivity from '../pages/Campaign/View Ativity';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Campaign} />
      <Route path="/new" component={NewAtivity} isPrivate />
      <Route path="/view" component={ViewAtivity} isPrivate />
    </Switch>
  );
}
