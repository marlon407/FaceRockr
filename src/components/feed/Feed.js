import React from 'react';
import ReactPaginate from 'react-paginate';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FeedStore from '../../stores/FeedStore';
import FeedActions from '../../actions/FeedActions';
import FeedItems from './FeedItems';
import UpdateStatusBox from './UpdateStatusBox';

const style = {
  margin: 20,
};

export default class Feed extends React.Component {
  /**
  * React.Component constructor.
  */
  constructor() {
        super();
        this.state = { offset: 1 };
        this.changeHandler = this.onChange.bind(this);
    }

    /**
    * Component lifecycle function.
    */
    componentDidMount() {
        FeedActions.getFeed();
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
        const feed = FeedStore.getFeed();
        const pageCount = FeedStore.getCount();
        const friends = FeedStore.getFriends();
        const postSent = FeedStore.getPostSent();
        this.setState({feed, pageCount, friends});
        if(postSent){
          FeedActions.getFeed(this.state.offset);
        }
    }

    /**
    * Pagination Onclick Event Handler
    * @param data
    */
    handlePageClick = (data) => {
      let selected = data.selected;
      let offset = selected + 1;
      this.setState({offset: offset, feed: []}, () => {
        FeedActions.getFeed(offset);
      });
    }

    /**
    * Component lifecycle function.  See:  https://facebook.github.io/react/docs/component-specs.html#render
    * @returns {XML}
    */
    render() {
      return (
        <div className="feed">
          <Paper style={style} zDepth={2} >
            <UpdateStatusBox />
            <Divider />
            <FeedItems feed={this.state.feed} friends={this.state.friends} />
            <Divider />
            <ReactPaginate previousLabel={"previous"}
               nextLabel={"next"}
               breakLabel={<a href="">...</a>}
               breakClassName={"break-me"}
               pageCount={this.state.pageCount/10}
               marginPagesDisplayed={2}
               pageRangeDisplayed={10}
               onPageChange={this.handlePageClick}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"} />
          </Paper>
        </div>
      )
    }
}
