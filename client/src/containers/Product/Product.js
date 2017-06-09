import React, { Component } from 'react';
import './Product.css';
import ProductInformation from '../../components/ProductInformation';
import ImageSlide from '../../components/ImageSlide';
import Copyright from '../../components/Copyright';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';

class Product extends Component {
	render() {
		if (this.props.loading) {
			return (
				<div className="productDetailContainer">
					<div className="copyrightLittle">
						<Copyright />
					</div>
					<div className="loadingContainer">
						<Loading 
							width="100px"
							height="100px"
						/>
					</div>
				</div>
			)
		}
		return (
			<div className="productDetailContainer">
				<div className="copyrightLittle">
					<Copyright />
				</div>
				<div className="productContentContainer">
					<ProductInformation 
						product={this.props.product}
					/>
				</div>
				<div className="productImageContainer">
					<ImageSlide />
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	loading: state.loadings.product,
	product: state.product
}))(Product);
