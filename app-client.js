import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './src/routes';

const mountpoint = document.getElementById('app');
const history = createBrowserHistory();
const router = (
  <Router history={history}>
    {routes}
  </Router>
);

render(router, mountpoint);
