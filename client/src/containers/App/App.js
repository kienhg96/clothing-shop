import React, { Component } from 'react';
import SideBar from '../SideBar';
import AllProducts from '../AllProducts';
import SearchDialog from '../../components/SearchDialog';
import Product from '../Product';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchDialog: false
		}
	}

	render() {
		return (
			<div>
				<div className="sidebarContainer">
					<SideBar onSearchClick={() => this.setState({ searchDialog: true })}/>
				</div>
				<div className="contentContainer">
					<Switch>
						<Route exact path="/" render={() => (
							<div>
								Hi
							</div>
						)}/>
						<Route exact path="/category/:name" render={({match}) => {
							const categoryName = match.params.name;
							console.log('Getting data from', categoryName);
							return (
								<AllProducts />
							)
						}}/>
						<Route exact path="/product/:id" render={({match}) => {
							const productId = match.params.id;
							console.log('Getting data from', productId);
							return (
								<Product />
							)
						}}/>
					</Switch>
				</div>
				<div>
					<SearchDialog 
						show={this.state.searchDialog}
						onRequestClose={() => this.setState({ searchDialog: false })}
					/>
				</div>
			</div>
		)
	}
}

export default App;
