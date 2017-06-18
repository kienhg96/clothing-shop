import React from 'react';
import Icon from '../Icon';

const CartDelete = ({onClick}) => (
	<div className="CartDelete">
		<button className="transButton" onClick={onClick}>
			<Icon icon="fa-times" style={{
				fontSize: 25
			}}/>
		</button>
	</div>
);

export default CartDelete;
