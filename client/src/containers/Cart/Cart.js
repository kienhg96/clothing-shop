import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import './Cart.css';

class Cart extends Component {
	render() {
		return (
			<div className="Cart">
				<div className="CartHeader">
					<h1 className="title">
						Shopping cart
					</h1>
					<p className="itemNumber">4 items in the bag</p>
				</div>
				<div>
					<CartItem />
					<CartItem />
				</div>
				<div className="CartMessageContainer">
					<TextArea rows="3" placeholder="Special instructions for seller" />
				</div>
				<div className="CartCheckoutContainer">
					<div className="CartPrice">
						Total: <span className="price">240000 VNĐ</span>
					</div>
					<div className="PriceNote">
						(Prices do not include shipping rates)
					</div>
					<div className="CartButtonGroup">
						<Button style={{
							marginRight: 10
						}}>Check out</Button>
						<Button>
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

export default Cart;
