import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import { hashHistory } from "react-router";
import FeedStore from './stores/FeedStore';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { open: false };
    this.changeHandler = this.onChange.bind(this);
  }

  componentWillMount() {
      FeedStore.addChangeListener(this.changeHandler);
  }

  componentWillUnmount() {
      FeedStore.removeChangeListener(this.changeHandler);
  }

  onChange() {
      const postSent = FeedStore.getPostSent();
      this.setState({open: postSent});
  }

  rightElement() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Feed" onTouchTap={() => {hashHistory.push('/feed')}} />
        <MenuItem primaryText="Friends" onTouchTap={() => {hashHistory.push('/friends')}} />
      </IconMenu>
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title="FaceRockr"
          style={{cursor: 'pointer'}}

          iconElementLeft={<a href="http://coderockr.com/images/hand-white.svg" />}

          onTitleTouchTap={()=>this.props.router.push('/')}
          iconElementRight={this.rightElement()}/>

        {this.props.children}
        <Snackbar
          open={this.state.open}
          message="Post Sent Successfully!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}/>
      </div>
    )
  }
}
