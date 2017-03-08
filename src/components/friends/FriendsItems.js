import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import EmptyListItem from '../EmptyListItem';

export default class FriendsItems extends React.Component {

    /**
    * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
    * @returns {XML}
    */
    render() {

      const { friends } = this.props;
      if (!friends) return <EmptyListItem primaryText="No friends to show"/>;
      const items = friends.map((item) => {
        return(
          <ListItem key={item.id}
            leftAvatar={<Avatar src={item.avatar} />}
            primaryText={item.name}
          />
        );
      });

      return (

        <List>
          {items}
        </List>
      )
    }

}
