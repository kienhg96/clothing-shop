import React from 'react';
import './Button.css';

const Button = ({color = "", ...rest}) => (
	<button {...rest} className={"FlatButton " + color}></button>
);

export default Button;
