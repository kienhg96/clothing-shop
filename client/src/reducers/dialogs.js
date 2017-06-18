import {
	TOGGLE_SEARCH_DIALOG,
	TOGGLE_OVERLAY_LOADING
} from '../constants';

const DEFAULT_STATE = {
	search: false,
	overlayLoading: false
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case TOGGLE_SEARCH_DIALOG:
			return {
				...state,
				search: action.open
			}
		case TOGGLE_OVERLAY_LOADING:
			return {
				...state,
				overlayLoading: action.open
			}
		default:
			return state;
	}
}
