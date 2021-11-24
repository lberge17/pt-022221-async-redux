import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PeopleContainer from './people/PeopleContainer';

export default function Pages() {
  return (
    <Switch>
      <Route path="/people" component={routerProps => <PeopleContainer routerProps={routerProps} />} />
    </Switch>
  )
}
