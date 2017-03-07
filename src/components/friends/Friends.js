import React from 'react';
import Paper from 'material-ui/Paper';

import FeedStore from '../../stores/FeedStore';
import FeedActions from '../../actions/FeedActions';
import FriendsItems from './FriendsItems';

const style = {
  margin: 20,
};

export default class Friends extends React.Component {

    /**
    * React.Component constructor.
    */
    constructor() {
        super();
        this.state = {};
        this.changeHandler = this.onChange.bind(this);
    }

    /**
    * Component lifecycle function.
    */
    componentDidMount() {
        FeedActions.getFriends();
    }

    /**
    * Component lifecycle function.
    */
    componentWillMount() {
        FeedStore.addChangeListener(this.changeHandler);
    }

    /**
    * Component lifecycle function.
    */
    componentWillUnmount() {
        FeedStore.removeChangeListener(this.changeHandler);
    }

     /**
     * onChange Event Handler
     */
    onChange() {
        const friends = FeedStore.getFriends();
        this.setState({friends});
    }

    /**
     * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
     * @returns {XML}
     */
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
