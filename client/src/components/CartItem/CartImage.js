import React from 'react';

const CartImage = ({url}) => (
	<div className="CartItemImage"
		style={{
			backgroundImage: `url(${url})`
		}}
	></div>
);

export default CartImage;
