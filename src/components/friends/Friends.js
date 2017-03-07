import React from 'react';
import Paper from 'material-ui/Paper';

import FeedStore from '../../stores/FeedStore';
import FeedActions from '../../actions/FeedActions';
import FriendsItems from './FriendsItems';

const style = {
  margin: 20,
};

export default class Friends extends React.Component {
  constructor() {
        super();
        this.state = {};
        this.changeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        FeedActions.getFriends();
    }

    componentWillMount() {
        FeedStore.addChangeListener(this.changeHandler);
    }

    componentWillUnmount() {
        FeedStore.removeChangeListener(this.changeHandler);
    }

    onChange() {
        const friends = FeedStore.getFriends();
        this.setState({friends});
    }

    render() {
      return (
        <div className="feed">
          <Paper style={style} zDepth={2} >
            <FriendsItems friends={this.state.friends} />
          </Paper>
        </div>
      )
    }
}
