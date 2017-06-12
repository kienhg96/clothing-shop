import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div>
				Search {decodeURI(this.props.query)}
			</div>
		);
	}
}

export default Search;
