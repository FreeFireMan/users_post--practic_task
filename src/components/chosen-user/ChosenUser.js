import React, {Component} from 'react';
import './ChosenUser.css'
import Loading from "../services/loading/Loading";

class ChosenUser extends Component {
  render() {
    const {user} = this.props
    if (user) {
      const {user: {name, username, email, phone, website}} = this.props
      return (
          <div className='chosen-user'>
            <p className='fs25'>{name}</p>
            <p className='fs14'>{username}</p>
            <hr className='hr'/>
            <p><b>Email: </b>{email}</p>
            <hr className='hr'/>
            <p><b>Phone: </b>{phone}</p>
            <hr className='hr'/>
            <p><b>Website: </b>{website}</p>
          </div>
      )
    } else {
      return (
          <div className='chosen-user'>
            <Loading/>
          </div>
      );
    }
  }
}

export default ChosenUser;