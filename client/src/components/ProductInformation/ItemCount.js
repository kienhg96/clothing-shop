import React from 'react';

const ItemCount = ({value, onChange}) => (
	<div className="itemCount">
		<input 
			className="itemCountInput"
			type="text"
			value={value}
			onChange={onChange}
		/>
	</div>
)

export default ItemCount;
