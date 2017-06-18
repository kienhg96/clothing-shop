import React from 'react';
import Icon from '../Icon';

const CartUpdate = ({onAccept, onDeny, visible = false}) => (
	<div className="CartUpdate"
		style={{
			visibility: visible ? 'visible' : 'hidden'
		}}
	>
		<div>
			<button className="transButton accept" onClick={onAccept}>
				<Icon icon="fa-check" style={{
					fontSize: 25
				}}/>
			</button>
		</div>
		<div>
			<button className="transButton deny" onClick={onDeny}>
				<Icon icon="fa-times" style={{
					fontSize: 25
				}}/>
			</button>
		</div>
	</div>
);

export default CartUpdate;
