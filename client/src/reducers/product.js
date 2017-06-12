import { SET_PRODUCT } from '../constants';

export default (state = {}, action) => {
	switch (action.type) {
		case SET_PRODUCT:
			return action.product;
		default:
			return state;
	}
}
