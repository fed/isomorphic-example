import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/container';
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import NoMatch from './components/no-match';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='work' component={Work} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={NoMatch} />
  </Route>
);
