import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import FeedStore from '../stores/FeedStore';
import FeedActions from '../actions/FeedActions';


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

    renderItems(){
      const { friends } = this.state;
      if (!friends) return null;
      const items = friends.map((item) => {
        return(
          <ListItem key={item.id}
            leftAvatar={<Avatar src={item.avatar} />}
            primaryText={item.name}
          />
        );
      });
      return items
    }

    render() {
      return (
        <div>
          <List>
            {this.renderItems()}
          </List>
        </div>
      )
    }
}