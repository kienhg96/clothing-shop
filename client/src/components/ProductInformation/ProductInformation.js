import React, { Component } from 'react';
import './ProductInformation.css';
import Icon from '../Icon';
import Option from '../Option';
import Path from './Path';
import ProductName from './ProductName';
import Producer from './Producer';
import Price from './Price';
import Brief from './Brief';
import ItemCount from './ItemCount';

class ProductInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: props.product.sizes[0],
			color: props.product.colors[0],
			count: 1
		}
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	handleAddToCart() {
		let { count } = this.state;
		if (count === "") {
			this.setState({
				count: 1
			});
			count = 1;
		}
		this.props.addToCart({
			id: this.props.product.id,
			size: this.state.size,
			color: this.state.color,
			count: parseInt(count, 10)
		});
	}

	render() {
		const { briefDescription, colors, name, price, producer, sizes,
				category } = this.props.product;
		return (
			<div className="productInformation">
				<div className="pathContainer">
					<Path name="CASHMERE WOOL COAT" category={{
						url: category.name,
						name: category.title
					}} />
				</div>
				<div className="productDetailNameContainer">
					<ProductName name={name} />
				</div>
				<div className="productDetailProductorContainer">
					<Producer name={producer} />
				</div>
				<div className="productDetailPriceContainer">
					<Price price={price} />
				</div>
				<div className="productDetailBriefContainer">
					<Brief content={briefDescription} />
				</div>
				<div className="productOptionContainer">
					<Option
						label="Size"
						value={this.state.size}
						values={sizes}
						onChange={value => this.setState({ size: value })}
					/>
				</div>
				<div className="productOptionContainer">
					<Option
						label="Color"
						value={this.state.color}
						values={colors}
						onChange={value => this.setState({ color: value })}
					/>
				</div>
				<div className="productItemCountCheckoutContainer">
					<div className="itemCountContainer">
						<ItemCount value={this.state.count}
							onChange={e => {
								const value = e.target.value;
								if (!isNaN(value) && value.length < 4) {
									this.setState({
										count: e.target.value
									});
								};
							}}
						/>
					</div>
					<div className="checkoutButtonContainer">
						<button className="checkoutButton"
							onClick={this.handleAddToCart}
						>Thêm vào giỏ</button>
					</div>
				</div>
				<div className="productShareContainer" 
					onClick={() => console.log('share')}
				>
					<Icon icon="fa-share-alt" style={{
						fontSize: 16
					}}/>
					<span>Share this</span>
				</div>
			</div>
		)
	}
}

export default ProductInformation;
