import React, { Component } from 'react';
import './Product.css';
import ProductInformation from '../../components/ProductInformation';
import ImageSlide from '../../components/ImageSlide';
import Copyright from '../../components/Copyright';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import { loadProduct } from '../../actions/product';
import { addToCart } from '../../actions/cart';

class Product extends Component {
	componentWillReceiveProps(newProps) {
		if (newProps.productId !== this.props.productId) {
			this.props.loadProduct(newProps.productId);
		}
	}

	componentWillMount() {
		this.props.loadProduct(this.props.productId);
	}

	shouldComponentUpdate(newProps) {
		if (this.props.loading !== newProps.loading) {
			return true;
		}
		return false;
	}

	render() {
		const { loading } = this.props;
		return (
			<div className="productDetailContainer">
				<div className="copyrightLittle">
					<Copyright />
				</div>
				{!loading && <div className="productContentContainer">
					<ProductInformation 
						product={this.props.product}
						addToCart={this.props.addToCart}
					/>
				</div>}
				{!loading && <div className="productImageContainer">
					<ImageSlide images={this.props.product.images} />
				</div>}
				{loading && <div className="loadingContainer">
					<Loading 
						width="100px"
						height="100px"
					/>
				</div>}
			</div>
		)
	}
}

export default connect(state => ({
	loading: state.loadings.product,
	product: state.product
}), {
	loadProduct,
	addToCart
})(Product);
