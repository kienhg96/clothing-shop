import React from 'react';

const defaultStyle = {
	fontSize: 26
};

export default ({icon, style = defaultStyle}) => (
	<i className={`fa ${icon}`} aria-hidden="true"
		style={style}
	></i>
)
