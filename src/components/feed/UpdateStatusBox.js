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

    /**
    * Input OnChane Event Handler
    * @param e
    */
    onChangeText(e){
      this.setState({ newPost: e.target.value})
    }

    /**
    * RaisedButton OnClick Event Handler
    */
    postMessage(){
      if(this.state.newPost){
        FeedActions.updateStatus(this.state.newPost);
        this.setState({ newPost: "" })
      }else{
        FeedActions.sendMessage("This post appears to be blank. Please write something!")
      }
    }

    /**
    * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
    * @returns {XML}
    */
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
