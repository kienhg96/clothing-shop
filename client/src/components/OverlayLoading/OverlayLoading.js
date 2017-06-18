import React from 'react';
import Loading from '../Loading';
import './OverlayLoading.css';

const OverlayLoading = ({show = false}) => (
	<div className="OverlayLoading"
		style={{
			display: show ? "flex" : "none"
		}}
	>
		<Loading 
			width={100}
			height={100}
		/>
	</div>
);
export default OverlayLoading;
