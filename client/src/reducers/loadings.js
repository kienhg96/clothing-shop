import { SET_PRODUCT_LOADING } from '../constants';

const DEFAULT_STATE = {
	product: true,
	allProducts: false
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_PRODUCT_LOADING:
			return {
				...state,
				product: action.loading
			}
		default:
			return state;
	}
}
