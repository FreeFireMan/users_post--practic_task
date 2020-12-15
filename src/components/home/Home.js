import React, {Component} from 'react';
import './Home.css'
import logo from "../../logo.svg";

class Home extends Component {
  render() {
    return (
        <div className='home-wrapper'>
          <h2 className='text-home'>React</h2>
          <div className='img-wrapper'>
            <img src={logo} className='body-img' alt="logo"/>
          </div>
        </div>
    );
  }
}

export default Home;