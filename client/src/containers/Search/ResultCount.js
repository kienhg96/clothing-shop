import React from 'react';

const ResultCount = ({count, query}) => (
	<div className="briefResult">
		{
			count > 0 
			?	<span>Your search for&nbsp;
				<span className="query">{query}</span>
				&nbsp;revealed {count} results</span>
			:	<span>Your search for&nbsp;
				<span className="query">{query}</span>
				&nbsp;did not yield any results</span>
		}
	</div>
);

export default ResultCount;
