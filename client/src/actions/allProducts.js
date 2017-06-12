import { SET_ALL_PRODUCTS } from '../constants';
import { setAllProductsLoading } from './loadings';
// Dummy data
import allProducts from '../dummy/allProducts';

export const setAllProducts = products => ({
	type: SET_ALL_PRODUCTS,
	products
});

export const loadAllProducts = categoryName => dispatch => {
	console.log('Load all product of categoryID ' + categoryName);
	dispatch(setAllProductsLoading(true));
	setTimeout(() => {
		dispatch(setAllProducts(allProducts));
		dispatch(setAllProductsLoading(false));
	}, 1000);
}
