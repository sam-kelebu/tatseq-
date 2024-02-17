import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import about from './Component/about';
import Contact from './Component/contact';

function Routes(){
  return(
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={about} />
    <Route path="/contact" component={Contact} />
  </Switch>
  );
}
export default Routes;