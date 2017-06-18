import React, { Component } from 'react';
import './CartItem.css';
import CartImage from './CartImage';
import CartContent from './CartContent';
import CartCount from './CartCount';
import CartDelete from './CartDelete';
import CartUpdate from './CartUpdate';

class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.product.count
		}
		this.handleCountChange = this.handleCountChange.bind(this);
		this.handleDeny = this.handleDeny.bind(this);
		this.handleAccept = this.handleAccept.bind(this);
	}

	handleCountChange(e) {
		const value = e.target.value;
		if (!isNaN(value) && value.length < 4) {
			this.setState({
				count: e.target.value
			});
		}
	}

	handleAccept() {
		const { count } = this.state;
		if (count.length > 0 
				&& count.toString() !== this.props.product.count.toString())
		{
			this.props.changeCount(parseInt(count, 10));
		}
	}

	handleDeny() {
		this.setState({
			count: this.props.product.count
		});
	}

	handleDelete() {
		console.log('Delete');
	}

	render() {
		const { product } = this.props;
		return (
			<div className="CartItem">
				<CartImage url={product.thumb} />
				<CartContent 
					name={product.name}
					size={36}
					color={product.color}
					price={product.price}
					url={`/product/${product.productId}`}
				/>
				<CartCount
					value={this.state.count}
					onChange={this.handleCountChange}
					onSubmit={e => {
						e.preventDefault();
						this.handleAccept();
					}}
				/>
				<CartUpdate
					onAccept={this.handleAccept}
					onDeny={this.handleDeny}
					visible={this.state.count.toString() 
							!== this.props.product.count.toString() && this.state.count.length > 0}
				/>
				<CartDelete
					onClick={this.handleDelete}
				/>
			</div>
		);
	}
}

export default CartItem;
