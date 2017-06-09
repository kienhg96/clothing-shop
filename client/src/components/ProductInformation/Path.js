import React from 'react';
import Entity from './Entity';
import Seperate from './Seperate';

const Path = ({category, name}) => (
	<div className="pathContainer">
		<Entity url="/" name="Home" />
		<Seperate />
		<Entity url={`/category/${category.url}`} name={category.name} />
		<Seperate />
		<span className="pathName">{name}</span>
	</div>
);

export default Path;
