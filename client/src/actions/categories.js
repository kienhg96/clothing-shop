import { SET_CATEGORIES } from '../constants';
import { setCategoriesLoading } from './loadings';
import categories from '../dummy/categories';

export const setCategories = categories => ({
	type: SET_CATEGORIES,
	categories
});

export const loadCategories = () => dispatch => {
	dispatch(setCategoriesLoading(true));
	setTimeout(() => {
		dispatch(setCategories(categories));
		dispatch(setCategoriesLoading(false));
	}, 500);
};
