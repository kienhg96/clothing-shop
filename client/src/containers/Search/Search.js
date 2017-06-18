import React, { Component } from 'react';
import './Search.css';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import { push } from 'react-router-redux';
import { doSearch } from '../../actions/search';
import ResultCount from './ResultCount';
import ListProduct from './ListProduct';
import SearchAgain from './SearchAgain';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q: ''
		}
		this.handleQChange = this.handleQChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.query !== this.props.query) {
			this.props.doSearch(newProps.query);
		}
	}

	componentWillMount() {
		this.props.doSearch(this.props.query);
	}

	shouldComponentUpdate(newProps, nextState) {
		if (nextState.q !== this.state.q) {
			return true;
		}
		if (this.props.loading !== newProps.loading) {
			return true;
		}
		return false;
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		this.props.push({
			pathname: '/search',
			search: `q=${encodeURI(this.state.q)}`
		});
	}

	handleQChange(value) {
		this.setState({
			q: value
		});
	}

	render() {
		return (
			<div>
				{this.props.loading
				?	<div className="loadingContainer">
						<Loading width="100px" height="100px" />
					</div>
				:	<div className="Search">
						<div style={{
							marginBottom: 50
						}}>
							<h1 className="title">Search</h1>
							<ResultCount
								count={this.props.products.length}
								query={this.props.query}
							/>
						</div>
						{
							this.props.products.length > 0
							?	<ListProduct 
									products={this.props.products} 
								/>
							:	<SearchAgain 
									content={this.state.q}
									onChange={this.handleQChange}
									onSubmit={this.handleSearchSubmit}
								/>
						}
					</div>
				}
			</div>
		);
	}
}

export default connect(state => ({
	loading: state.loadings.search,
	products: state.search
}), {
	push,
	doSearch
})(Search);
