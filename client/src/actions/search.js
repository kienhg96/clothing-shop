import { setSearchLoading } from './loadings';
import { SET_SEARCH } from '../constants';
import search from '../dummy/search';

export const setSearch = products => ({
	type: SET_SEARCH,
	products
});

export const doSearch = query => dispatch => {
	console.log('Load Search', query);
	dispatch(setSearchLoading(true));
	setTimeout(() => {
		dispatch(setSearch(search));
		dispatch(setSearchLoading(false));
	}, 1000);
}
