import React from 'react';
import SearchItem from '../../components/SearchItem';

const ListProduct = ({products}) => (
	<div>
		{products.map(product => (
			<SearchItem
				key={product.id} 
				name={product.name}
				price={product.price}
				brief={product.brief}
				url={`/product/${product.id}`}
				image={product.thumb}
			/>
		))}
	</div>
);

export default ListProduct;
