import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import './Cart.css';
import cartDummy from '../../dummy/cart';
import { connect } from 'react-redux';
import { loadCart } from '../../actions/cart';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		}
	}

	componentWillMount() {
		this.props.loadCart();
	}

	render() {
		const cart = cartDummy;
		let total = 0;
		cart.forEach(product => {
			total += product.price * product.count;
		});
		return (
			<div className="Cart">
				<div className="CartHeader">
					<h1 className="title">
						Shopping cart
					</h1>
					<p className="itemNumber">{cart.length} items in the bag</p>
				</div>
				<div>
					{
						cart.map(product => 
							<CartItem 
								key={product.id}
								product={product}
								changeCount={count => {
									console.log('Change id =', product.productId, 'new count =', count);
								}}
							/>
						)
					}
				</div>
				<div className="CartMessageContainer">
					<TextArea 
						rows="3" 
						placeholder="Special instructions for seller"
						value={this.state.message}
						onChange={e => 
							this.setState({
								message: e.target.value
							})
						}
					/>
				</div>
				<div className="CartCheckoutContainer">
					<div className="CartPrice">
						Total: <span className="price">{total} VNĐ</span>
					</div>
					<div className="PriceNote">
						(Prices do not include shipping rates)
					</div>
					<div className="CartButtonGroup">
						<Button style={{
							marginRight: 10
						}} color="black">Check out</Button>
						<Button color="black">
							<Icon icon="fa-refresh" style={{
								fontSize: 18
							}} />
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({}), {
	loadCart
})(Cart);
