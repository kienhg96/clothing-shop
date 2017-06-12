import React from 'react';

const FlatButton = ({content, onClick}) => (
	<span className="slideButton" onClick={onClick}>
		{content}
	</span>
);

export default FlatButton;
