import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import allProducts from './allProducts';
import categories from './categories';
import loadings from './loadings';
import product from './product';
import dialogs from './dialogs';
import cart from './cart';
import search from './search';

export default combineReducers({
	router,
	allProducts,
	categories,
	loadings,
	product,
	dialogs,
	cart,
	search
});
