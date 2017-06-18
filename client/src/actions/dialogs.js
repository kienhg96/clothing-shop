import {
	TOGGLE_SEARCH_DIALOG,
	TOGGLE_OVERLAY_LOADING
} from '../constants';

export const toggleSearchDialog = open => ({
	type: TOGGLE_SEARCH_DIALOG,
	open
});

export const toggleOverlayLoading = open => ({
	type: TOGGLE_OVERLAY_LOADING,
	open
});
