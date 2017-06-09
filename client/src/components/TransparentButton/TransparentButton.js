import React from 'react';
import './TransparentButton.css';

export default ({children, onClick, style = {}}) => (
	<button className="transparentButton" onClick={onClick} style={style}>
		{children}
	</button>
)
