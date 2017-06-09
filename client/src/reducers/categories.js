const DEFAULT_STATE = [{
	id: '1',
	name: 'quanao1',
	title: 'Quần áo 1'
}, {
	id: '2',
	name: 'quanao2',
	title: 'Quần áo 2'
}, {
	id: '3',
	name: 'quanao3',
	title: 'Quần áo 3'
}];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
