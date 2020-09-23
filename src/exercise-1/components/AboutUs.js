import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
  render() {
	return (
	<div className='about-us'>
	<p> Company: ThoughtWorks </p>
	<p>LocalLocation: Xi'an</p>
	<p> For more information, please </p>
	  <p>view our <Link to="/" className="weobiste">website</Link>.</p>
	</div>
  );
  }
}

export default AboutUs;