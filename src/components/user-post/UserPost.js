import React, {Component} from 'react';
import './UserPost.css'

class UserPost extends Component {
  render() {
    const {post:{id, title, body}} = this.props
    return (
        <div className='post-wrapper'>
          <p className='post-title'><b>{`${id}. ${title}`}</b></p>
          <p>{body}</p>
        </div>
    );
  }
}

export default UserPost;