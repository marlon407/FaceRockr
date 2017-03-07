import React from 'react';
import { render } from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from "react-router";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App.js';
import Feed from './components/feed/Feed';
import Friends from './components/friends/Friends'

import './index.css'

injectTapEventPlugin();

render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Feed}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/friends" component={Friends}/>
      </Route>
    </Router>
  </MuiThemeProvider>
  ), document.getElementById('root'));
