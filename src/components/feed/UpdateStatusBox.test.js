import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UpdateStatusBox from './UpdateStatusBox';

injectTapEventPlugin();

it('renders UpdateStatusBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <UpdateStatusBox />
    </MuiThemeProvider>
    , div);
});
