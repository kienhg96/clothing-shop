import { SET_PRODUCT } from '../constants';
import { setProductLoading } from './loadings';
// Dummy data
import product from '../dummy/product';

export const setProduct = product => ({
	type: SET_PRODUCT,
	product
});

export const loadProduct = id => dispatch => {
	console.log("Loading product id " + id);
	dispatch(setProductLoading(true));
	setTimeout(() => {
		dispatch(setProduct(product));
		dispatch(setProductLoading(false));
	}, 500);
};
