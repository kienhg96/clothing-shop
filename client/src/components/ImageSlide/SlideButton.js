import React from 'react';
import FlatButton from './FlatButton';
import Icon from '../Icon';

const SlideButton = ({onNextClick, onPrevClick, maxIndex, currentIndex}) => (
	<div className="slideButtonContainer">
		<FlatButton
			content={<Icon icon="fa-arrow-left" />}
			onClick={onPrevClick}
		/>
		<FlatButton
			content={<Icon icon="fa-arrow-right" />}
			onClick={onNextClick}
		/>
	</div>
);

export default SlideButton;
