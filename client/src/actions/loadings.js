import { 
	SET_PRODUCT_LOADING,
	SET_CATEGORIES_LOADING,
	SET_ALL_PRODUCTS_LOADING,
	SET_SEARCH_LOADING,
	SET_CART_LOADING
} from '../constants';

export const setProductLoading = loading => ({
	type: SET_PRODUCT_LOADING,
	loading
});

export const setCategoriesLoading = loading => ({
	type: SET_CATEGORIES_LOADING,
	loading
});

export const setAllProductsLoading = loading => ({
	type: SET_ALL_PRODUCTS_LOADING,
	loading
});

export const setSearchLoading = loading => ({
	type: SET_SEARCH_LOADING,
	loading
});

export const setCartLoading = loading => ({
	type: SET_CART_LOADING,
	loading
});
