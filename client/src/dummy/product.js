const url1 = "https://cdn.shopify.com/s/files/1/0739/8127/products/1-1_f5ddcf48-4188-4472-8d2c-b703c1265783_1920x.jpg";
const url2 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/2-2_1920x.jpg';
const url3 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/2-1_6852cff7-43d8-474b-847e-d96ddf25adca_1920x.jpg';
const url4 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/6-1_2132a94c-513b-4d32-9db7-c36a81d7c9d5_1920x.jpg';
const product = {
	id: "1",
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
	},
	images: [url1, url2, url3, url4]
};

export default product;
