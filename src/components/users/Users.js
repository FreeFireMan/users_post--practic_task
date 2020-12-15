import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import {Route, withRouter} from "react-router-dom";
import Loading from "../services/loading/Loading";
import User from "../user/User";
import ChosenUser from "../chosen-user/ChosenUser";
import UserPosts from "../user-posts/UserPosts";

class Users extends Component {
  state = {users: null, chosenUser: null}

  componentDidMount() {
    const {match: {url}} = this.props
    TakeDataFromAPI(url)
        .then(users => this.setState({users}))
  }

  chosenUser = (chosenUser) => {
    this.setState({chosenUser})
  }

  render() {
    const {match: {url}} = this.props

    const {users, chosenUser} = this.state
    if (users) {
      return (

          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <div className='all-and-chosen'>
              <div className='all-users'>
                {users.map(value => <User user={value} key={value.id} chosenUser={this.chosenUser}/>)}
              </div>
              <div className='w50'>

                <Route path={url + '/:id'} render={(props) => {
                  const {match: {params: {id}}} = props
                  return <ChosenUser user={chosenUser} key={id}/>
                }}
                />
              </div>
            </div>
            <Route path={url + '/:id/posts'} render={(props) => {
              const {match: {params: {id}}} = props
              return <UserPosts id={id} key={id}/>
            }}/>
          </div>

      );
    }
  else
    {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <Loading/>
          </div>
      )
    }

  }
  }

  export default withRouter(Users);