import React from 'react';

const CartCount = ({value, onChange}) => (
	<div className="CartCount">
		<input type="text" className="itemCountInput"
			value={value}
			onChange={onChange}
		/>
	</div>
);

export default CartCount;
