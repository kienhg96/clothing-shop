import { TOGGLE_SEARCH_DIALOG } from '../constants';
const DEFAULT_STATE = {
	search: false
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case TOGGLE_SEARCH_DIALOG:
			return {
				...state,
				search: action.open
			}
		default:
			return state;
	}
}
