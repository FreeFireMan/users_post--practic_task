import React, {Component} from 'react';
import './HeaderItem.css'
import {Link} from "react-router-dom";

class HeaderItem extends Component {
  render() {
    const {item} = this.props
    return (
        <div className='header-item'>
          <Link to={item}><b>{item}</b></Link>
        </div>
    );
  }
}

export default HeaderItem;