import React from 'react';
import { Link } from 'react-router-dom';

const Entity = ({url, name}) => (
	<Link to={url}>
		<span className="pathUrl">
			{name}
		</span>
	</Link>
);

export default Entity;
