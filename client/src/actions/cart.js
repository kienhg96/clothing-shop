import {
	SET_CART,
	SET_CART_COUNT
} from '../constants';
import { setCartLoading } from './loadings';
import { toggleOverlayLoading } from './dialogs';
import cartDummy from '../dummy/cart';

export const addToCart = info => dispatch => {
	console.log('Add to cart', info);
	dispatch(toggleOverlayLoading(true));
	setTimeout(() => {
		dispatch(toggleOverlayLoading(false));
	}, 1000);
}

export const setCart = cart => ({
	type: SET_CART,
	cart
});

export const loadCart = () => dispatch => {
	console.log('Load cart');
	const cart = cartDummy;
	dispatch(setCartLoading(true));
	setTimeout(() => {
		dispatch(setCart(cart));
		dispatch(setCartLoading(false));
	}, 1000);
}

export const setCartCount = (id, count) => ({
	type: SET_CART_COUNT,
	id,
	count
});

export const changeCount = (id, count) => dispatch => {
	console.log('Change id =', id, 'new count =', count);
	dispatch(setCartCount(id, count));
	// Update API here
}

export const checkout = message => dispatch => {
	console.log('Checkout', message);
}
