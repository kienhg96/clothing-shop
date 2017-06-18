import React from 'react';
import { Link } from 'react-router-dom';

const CartContent = ({name, size, color, price, url}) => (
	<div className="CartContent">
		<h1 className="ItemName">
			<Link to={url}>{name}</Link>
		</h1>
		<div className="ItemSizeColor">
			{size}/{color}
		</div>
		<div className="ItemPrice">
			{price} VNĐ
		</div>
	</div>
);

export default CartContent;
