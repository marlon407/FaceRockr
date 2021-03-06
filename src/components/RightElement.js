import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from "react-router";

export default class RightElement extends React.Component {

  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          <MenuItem primaryText="Feed"  containerElement={<Link to="/feed" />} />
          <MenuItem primaryText="Friends" containerElement={<Link to="/friends" />} />
      </IconMenu>
    );
  }
}
