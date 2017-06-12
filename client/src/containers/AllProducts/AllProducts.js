import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridItem from '../../components/GridItem';
import './AllProducts.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { loadAllProducts } from '../../actions/allProducts';

const Product = ({price, name, image, id}) => (
	<div className="productContainer">
		<Link to={`/product/${id}`}>
			<GridItem price={price} name={name} image={image}/>
		</Link>
	</div>
)

class AllProducts extends Component {
	componentWillReceiveProps(newProps) {
		if (newProps.categoryName !== this.props.categoryName) {
			this.props.loadAllProducts(newProps.categoryName);
		}
	}

	componentWillMount() {
		this.props.loadAllProducts(this.props.categoryName);
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
			<div className="allProductsContainer">
				{loading 
				? <div className="loadingContainer">
					<Loading 
						width="100px"
						height="100px"
					/>
				</div>
				: this.props.allProducts.map(product => 
					<Product key={product.id}
						id={product.id}
						price={product.price}
						name={product.name}
						image={product.thumb} 
					/>
				)}
			</div>
		)
	}
}

export default connect(state => ({
	allProducts: state.allProducts,
	loading: state.loadings.allProducts
}), {
	loadAllProducts
})(AllProducts);
