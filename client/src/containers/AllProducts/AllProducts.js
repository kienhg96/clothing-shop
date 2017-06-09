import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridItem from '../../components/GridItem';
import './AllProducts.css';
import { Link } from 'react-router-dom';

const Product = ({price, name, image, id}) => (
	<div className="productContainer">
		<Link to={`/product/${id}`}>
			<GridItem price={price} name={name} image={image}/>
		</Link>
	</div>
)

class AllProducts extends Component {
	render() {
		return (
			<div className="allProductsContainer">
				{this.props.allProducts.map(product => 
					<Product key={product.id}
						id={product.id}
						price={product.price}
						name={product.name}
						image={product.image} 
					/>
				)}
			</div>
		)
	}
}

export default connect(state => ({
	allProducts: state.allProducts
}))(AllProducts);