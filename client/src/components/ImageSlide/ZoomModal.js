import React from 'react';
import FlatButton from './FlatButton';
import Icon from '../Icon';

const ZoomModal = ({onClick}) => (
	<div className="zoomModalContainer">
		<FlatButton
			content={<Icon icon="fa-arrows-alt" />}
			onClick={onClick}
		/>
	</div>
);

export default ZoomModal;
