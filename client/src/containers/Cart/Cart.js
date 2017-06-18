import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import './Cart.css';
import { connect } from 'react-redux';
import {
	loadCart,
	changeCount,
	checkout
} from '../../actions/cart';
import Loading from '../../components/Loading';

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
		if (this.props.loading) {
			return (
				<div className="loadingContainer">
					<Loading 
						width="100px"
						height="100px"
					/>
				</div>
			);
		}
		const { cart } = this.props;
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
								changeCount={count => 
									this.props.changeCount(product.id, count)
								}
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
						}} color="black"
							onClick={() => this.props.checkout(this.state.message)}
						>Check out</Button>
						<Button color="black" onClick={() => this.props.loadCart()}>
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

export default connect(state => ({
	loading: state.loadings.cart,
	cart: state.cart
}), {
	loadCart,
	changeCount,
	checkout
})(Cart);
