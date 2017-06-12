import { SET_ALL_PRODUCTS } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_ALL_PRODUCTS:
			return action.products;
		default:
			return state;
	}
}
