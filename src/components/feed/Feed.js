import React from 'react';
import ReactPaginate from 'react-paginate';
import Divider from 'material-ui/Divider';

import FeedStore from '../../stores/FeedStore';
import FeedActions from '../../actions/FeedActions';
import FeedItems from './FeedItems';
import NewPost from './NewPost';



export default class Feed extends React.Component {
  constructor() {
        super();
        this.state = {offset: 1};
        this.changeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        FeedActions.getFeed();
        FeedActions.getFriends();
    }

    componentWillMount() {
        FeedStore.addChangeListener(this.changeHandler);
    }

    componentWillUnmount() {
        FeedStore.removeChangeListener(this.changeHandler);
    }

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

    handlePageClick = (data) => {
      let selected = data.selected;
      let offset = selected + 1;
      this.setState({offset: offset}, () => {
        FeedActions.getFeed(offset);
      });
    }

    render() {
      return (
        <div className="feed">
          <NewPost />
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
        </div>
      )
    }
}
