import React from 'react';

const CartCount = ({value, onChange, onSubmit}) => (
	<div className="CartCount">
		<form onSubmit={onSubmit}>
			<input type="text" className="itemCountInput"
				value={value}
				onChange={onChange}
			/>
		</form>
	</div>
);

export default CartCount;
