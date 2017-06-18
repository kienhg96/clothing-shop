import { SET_CART } from '../constants';
import cartDummy from '../dummy/cart';

export const addToCart = info => dispatch => {
	console.log('Add to cart', info);
}

export const changeCount = (id, count) => dispatch => {
	console.log('Change id =', id, 'new count =', count);
}

export const setCart = cart => ({
	type: SET_CART,
	cart
});

export const loadCart = () => dispatch => {
	console.log('Load cart');
}
