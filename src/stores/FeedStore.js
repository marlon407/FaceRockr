import BaseStore from './BaseStore';
import ActionTypes from '../constants/ActionTypes';

class FeedStore extends BaseStore{

  constructor() {
      super();
      this.subscribe(() => this._registerToActions.bind(this));
      this.feed = null;
      this.feedCount = null;
      this.friends = null;
      this.postSent = false;
    }

    setFriends(feed){this.friends = feed;}
    getFriends(){return this.friends;}

    setFeed(feed){this.feed = feed;}
    getFeed(){return this.feed;}

    setCount(count){this.feedCount = count;}
    getCount(){return this.feedCount;}

    setPostSent(sent) { this.postSent = sent }
    getPostSent() { return this.postSent; }

    _registerToActions(action) {
        switch (action.type) {
        case ActionTypes.GET_FEED:
          this.setFeed(action.data);
          this.setCount(action.totalRows);
          this.setPostSent(false);
          this.emitChange();
          break;
        case ActionTypes.NEW_POST:
          this.setPostSent(true);
          this.emitChange();
          break;
        case ActionTypes.GET_FRIENDS:
          this.setFriends(action.data);
          this.emitChange();
          break;
        default:
          break;
        }
    }
}

export default new FeedStore();
