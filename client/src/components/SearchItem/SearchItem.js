import React from 'react';
import './SearchItem.css';
import { Link } from 'react-router-dom';

const SearchItem = ({name, price, brief, url, image}) => (
	<div className="SearchItem">
		<div className="Image">
			<Link to={url}>
				<div className="ImageContent"
					style={{
						backgroundImage: `url(${image})`
					}}
				></div>
			</Link>
		</div>
		<div className="Info">
			<div className="line header">
				<span className="productName">
					{name}
				</span>
				<span className="productPrice">
					{price}
				</span> VNĐ
			</div>
			<div className="line brief">
				{brief}
			</div>
			<div className="line">
				<Link to={url}>
					<span className="link">View product →</span>
				</Link>
			</div>
		</div>
	</div>
);

export default SearchItem;
