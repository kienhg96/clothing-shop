import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const logoUrl = "https://cdn.shopify.com/s/files/1/0739/8127/files/logo_x2.png";

const Logo = () => (
	<div className="logo">
		<Link to="/">
			<img src={logoUrl} alt="logo" />
		</Link>
	</div>
);

export default Logo;