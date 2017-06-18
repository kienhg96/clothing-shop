import { 
	SET_PRODUCT_LOADING, 
	SET_CATEGORIES_LOADING,
	SET_ALL_PRODUCTS_LOADING,
	SET_SEARCH_LOADING
} from '../constants';

const DEFAULT_STATE = {
	product: true,
	allProducts: true,
	categories: true,
	search: true
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_PRODUCT_LOADING:
			return {
				...state,
				product: action.loading
			}
		case SET_CATEGORIES_LOADING:
			return {
				...state,
				categories: action.loading
			}
		case SET_ALL_PRODUCTS_LOADING:
			return {
				...state,
				allProducts: action.loading
			}
		case SET_SEARCH_LOADING:
			return {
				...state,
				search: action.loading
			}
		default:
			return state;
	}
}
