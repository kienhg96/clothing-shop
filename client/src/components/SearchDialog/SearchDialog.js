import React, { Component } from 'react';
import Dialog from '../Dialog';
import Icon from '../Icon';
import './SearchDialog.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.search);
	}

	handleChange(e) {
		this.setState({
			search: e.target.value
		});
	}

	render() {
		return (
			<div className="searchFormContainer">
				<div className="searchInputContainer">
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="searchInput"
							placeholder="Input Anything"
							onChange={this.handleChange}
						/>
					</form>
				</div>
				<div className="searchIconContainer" onClick={this.handleSubmit}>
					<Icon icon="fa-search"/>
				</div>
			</div>
		)
	}
}

const SearchDialog = ({show, onRequestClose, onSubmit}) => (
	<Dialog show={show} onRequestClose={onRequestClose}>
		<div className="searchFormTitle">
			Search
		</div>
		<SearchForm onSubmit={onSubmit}/>
	</Dialog>
);

export default SearchDialog;
