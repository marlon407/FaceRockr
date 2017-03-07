
class FeedUtuils {

  findOwner(friends, post) {
    
      const owner = friends.filter((item)=>{
        return item.id == post.user
      })
      return owner ? owner[0] : owner;
  }

}

export default new FeedUtuils();
