import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './router/Contact';
import Download from './router/Download';
import Home from './router/Home';
import NotFound from './router/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
