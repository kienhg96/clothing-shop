import {
	SET_CART,
	SET_CART_COUNT
} from '../constants';

const cartItem = (state, action) => {
	switch (action.type) {
		case SET_CART_COUNT:
			if (state.id === action.id) {
				return {
					...state,
					count: action.count
				};
			}
			return state;
		default:
			return state;
	}
}

export default (state = [], action) => {
	switch (action.type) {
		case SET_CART:
			return action.cart;
		case SET_CART_COUNT:
			return state.map(item => cartItem(item, action));
		default:
			return state;
	}
}
