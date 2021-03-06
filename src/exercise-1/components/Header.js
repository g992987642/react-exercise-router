import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
	return (
		<div className='header'>
		  <div className='href_list'>
		  <Link to='/' className="link" >Home</Link>
		  <Link to='/my-profile' className="link" >My Profile</Link>
		  <Link to='/about-us' className="link" >About Us</Link>
		  </div>
		</div>
	);
  }
}

export default Header;