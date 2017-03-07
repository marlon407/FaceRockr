import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FeedActions from '../../actions/FeedActions';

const style = {
  margin: "20px 50px",
};

const textStyle = {
  padding: "10px"
};

export default class UpdateStatusBox extends React.Component {
  constructor() {
        super();
        this.state = {};
    }

    onChangeText(e){
      this.setState({ newPost: e.target.value})
    }

    postMessage(){
      if(this.state.newPost){
        FeedActions.post(this.state.newPost);
        this.setState({ newPost: "" })
      }
    }

    render() {
      return (
        <div>
          <TextField
            style={{width: '100%'}}
            textareaStyle={textStyle}
            floatingLabelStyle={textStyle}
            floatingLabelText="What's happening"
            multiLine={true}
            value={this.state.newPost}
            onChange={this.onChangeText.bind(this)}
            rows={3}
          />
          <div style={{textAlign:'right'}}>
            <RaisedButton onTouchTap={this.postMessage.bind(this)} label="Post" primary={true} style={style} />
          </div>
        </div>
      )
    }
}