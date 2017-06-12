import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css';
import Icon from '../Icon';
const url = "http://cdn.shopify.com/s/files/1/0739/8127/products/1_medium.jpg";

const CartImage = ({url}) => (
	<div className="CartItemImage"
		style={{
			backgroundImage: `url(${url})`
		}}
	></div>
);

const CartContent = () => (
	<div className="CartContent">
		<h1 className="ItemName">
			<Link to="/">CASHMERE WOOL COAT</Link>
		</h1>
		<div className="ItemSizeColor">
			34/WHITE
		</div>
		<div className="ItemPrice">
			120000 VNĐ
		</div>
	</div>
);

const CartCount = () => (
	<div className="CartCount">
		<input type="text" className="itemCountInput"
			value="123"
			onChange={() => {}}
		/>
	</div>
);

const CartDelete = () => (
	<div className="CartDelete">
		<button className="transButton">
			<Icon icon="fa-times" style={{
				fontSize: 25
			}}/>
		</button>
	</div>
);

class CartItem extends Component {
	render() {
		return (
			<div className="CartItem">
				<CartImage url={url} />
				<CartContent />
				<CartCount />
				<CartDelete />
			</div>
		);
	}
}

export default CartItem;
