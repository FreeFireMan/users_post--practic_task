import React, {Component} from 'react';
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import './UserPosts.css'
import {withRouter} from "react-router-dom";
import UserPost from "../user-post/UserPost";
import Loading from "../services/loading/Loading";

class UserPosts extends Component {
  state = {posts: null}

  componentDidMount() {
    const {id, match: {url}} = this.props

    TakeDataFromAPI(url)
        .then(allPosts => allPosts.filter(post => {
          const {userId} = post
          return +userId === +id
        }))
        .then(posts => this.setState({posts}))
  }

  render() {
    const {posts} = this.state
    if (posts) {
    return (
        <div className='posts-wrapper'>
          {posts.map(value=> <UserPost post={value} key={value.id}/>)}
        </div>
    );
    }else {
      return (
          <div className='posts-wrapper'>
            <Loading/>
          </div>
      )
    }
  }
}

export default withRouter(UserPosts);