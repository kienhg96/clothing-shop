import { 
	SET_PRODUCT_LOADING,
	SET_CATEGORIES_LOADING,
	SET_ALL_PRODUCTS_LOADING
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
