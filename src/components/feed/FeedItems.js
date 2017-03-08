import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import EmptyListItem from '../EmptyListItem';
import FeedUtuils from '../../utils/FeedUtuils';

export default class FeedItems extends React.Component {

    /**
    * When there is no props, renders a ListItem saying there is nothing to render
    * @returns {XML}
    */
    renderEmptyListItem() {
      return (
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />}
          primaryText={"Nothing to show"}/>
      )
    }

    /**
     * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
     * @returns {XML}
     */
    render() {
      const { feed, friends } = this.props;
      if (!feed || !friends) return (<EmptyListItem primaryText="No feed to show"/>);
      const items = feed.map((item) => {
          const owner = FeedUtuils.findOwner(friends, item);
          return (
            <ListItem key={item.id}
              nestedListStyle={{wordWrap: 'breakWord'}}
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
