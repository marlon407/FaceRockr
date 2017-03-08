import React from 'react';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import FeedStore from './stores/FeedStore';
import RightElement from './components/RightElement';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { message: '', open: false };
    this.changeHandler = this.onChange.bind(this);
  }

  componentWillMount() {
      FeedStore.addChangeListener(this.changeHandler);
  }

  componentWillUnmount() {
      FeedStore.removeChangeListener(this.changeHandler);
  }

  onChange() {
      const message = FeedStore.getMessage();
      if (message){
        this.setState({message: message, open: true});
      }else{
        this.setState({open: false});
      }
  }

  render() {
    return (
      <div>
        <AppBar
          title="FaceRockr"
          style={{cursor: 'pointer'}}
          iconElementLeft={<a href="http://coderockr.com/images/hand-white.svg" />}
          onTitleTouchTap={()=>this.props.router.push('/feed')}
          iconElementRight={<RightElement />}/>
        {this.props.children}
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}/>
      </div>
    )
  }
}
