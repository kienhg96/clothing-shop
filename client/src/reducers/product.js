const DEFAULT_STATE = {
	name: "CASHMERE WOOL COAT",
	producer: "Hoang Kien",
	price: 120000,
	briefDescription: "This item can be purchased via Ramunė Piekautaitė",
	sizes: [36, 38, 40],
	colors: ['white', 'black'],
	category: {
		id: 1,
		name: 'quanao1',
		title: 'Quần áo 1'
	}
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
