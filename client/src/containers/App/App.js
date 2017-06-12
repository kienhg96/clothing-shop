import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from '../SideBar';
import AllProducts from '../AllProducts';
import Product from '../Product';
import Blog from '../Blog';
import Home from '../Home';
import DialogCenter from '../DialogCenter';
import Search from '../Search';
import Cart from '../Cart';

class App extends Component {
	render() {
		return (
			<div>
				<div className="sidebarContainer">
					<SideBar onSearchClick={() => this.setState({ searchDialog: true })} />
				</div>
				<div className="contentContainer">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/category/:name" render={({match}) => 
							<AllProducts categoryName={match.params.name} />
						} />
						<Route exact path="/product/:id" render={({match}) => 
							<Product productId={match.params.id} />
						} />
						<Route exact path="/search/:q" render={({match}) => 
							<Search query={match.params.q} />
						}/>
						<Route exact path="/cart" component={Cart} />
					</Switch>
				</div>
				<DialogCenter />
			</div>
		)
	}
}

export default App;
