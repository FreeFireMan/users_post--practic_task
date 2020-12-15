import React, {Component} from 'react';
import './User.css'
import {Link, withRouter} from "react-router-dom";
import Details from "../buttons/details/Details";
import Posts from "../buttons/posts/Posts";

class User extends Component {
  render() {
    const {user, user:{id, name}, match:{url}, chosenUser} = this.props

    return (
        <div className='users-name-wrapper'>
          <p className='user-name'>{id}. {name}</p>
          <div className='btn-flex'>
            <Link to={`${url}/${id}`} onClick={()=>chosenUser(user)}><Details/></Link>
            <Link to={`${url}/${id}/posts`}><Posts/></Link>
          </div>
        </div>
    );
  }
}

export default withRouter(User);