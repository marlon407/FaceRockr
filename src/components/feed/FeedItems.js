import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class FeedItems extends React.Component {

    findOwner(post) {
        const owner = this.props.friends.filter((item)=>{
          return item.id == post.user
        })
        return owner[0];
    }

    render() {
      const { feed } = this.props;
      if (!feed) return null;
      const items = feed.map((item) => {
          const owner = this.findOwner(item);
          return(
            <ListItem key={item.id}
              style={{wordWrap: 'breakWord'}}
              leftAvatar={<Avatar src={owner ? owner.avatar : ''} />}
              primaryText={item.text || "No message"}
              secondaryText={owner ? owner.name : 'Anonymous'} />
          )
      });
      return (
        <List style={{width: '100%'}}>
          {items}
        </List>
      )
    }
}
