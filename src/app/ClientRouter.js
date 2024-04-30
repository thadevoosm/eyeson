
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './home/page';
import AboutUs from './about/page';

const ClientRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
};

export default ClientRouter;
