import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Feed from './Feed';

injectTapEventPlugin();

it('renders Feed without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Feed />
    </MuiThemeProvider>
    , div);
});
