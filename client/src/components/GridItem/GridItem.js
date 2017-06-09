import React from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

const GridItem = ({price, image, name}) =>  (
	<div className="gridItemContainer">
		<img alt={name} className="gridItemImage"
			src={image} />
		<div className="caption">
			<div className="arrowContainer">
				<span className="arrow"></span>
			</div>
			<div className="productName">
				{name}
			</div>
			<div className="price">
				{price} VNĐ
			</div>
		</div>
		<div className="cover">
		</div>
	</div>
);

GridItem.propTypes = {
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default GridItem;
