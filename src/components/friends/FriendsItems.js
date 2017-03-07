import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class FriendsItems extends React.Component {

    /**
    * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
    * @returns {XML}
    */
    render() {

      const { friends } = this.props;
      if (!friends) return null;
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
