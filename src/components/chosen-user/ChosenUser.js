import React, {Component} from 'react';
import './ChosenUser.css'
import Loading from "../services/loading/Loading";
import TakeDataFromAPI from "../services/TakeDataFromAPI";

class ChosenUser extends Component {
    state = {user: null};

    componentDidMount() {
        const {url} = this.props;
        TakeDataFromAPI(url)
            .then(user => this.setState({user}))
    }

    render() {

        const {user} = this.state

        if (user) {
            const  {name, username, email, phone, website} = user
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
