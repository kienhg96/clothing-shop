import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = ({pathname}) => (
	<ul className="navigation">
		<li className={pathname === "/blog" ? "active" : ""}>
			<Link to="/blog">Blog</Link>
		</li>
		<li className={pathname === "/about" ? "active" : ""}>
			<Link to="/about">About us</Link>
		</li>
		<li className={pathname === "/feature" ? "active" : ""}>
			<Link to="/feature">Feature</Link>
		</li>
		<li className={pathname === "/contacts" ? "active" : ""}>
			<Link to="/contacts">Contacts</Link>
		</li>
		<li className={pathname === "/newsletter" ? "active" : ""}>
			<Link to="/newsletter">Newsletter</Link>
		</li>
	</ul>
);

export default connect(state => ({
	pathname: state.router.location.pathname
}))(Navigation);
