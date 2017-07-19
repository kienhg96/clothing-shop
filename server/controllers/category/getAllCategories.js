const { getAll } = require('../../repositories/category');

const getAllCategories = (req, res) => {
	getAll()
	.then(categories => {
		res.json({ categories });
	})
	.catch(err => {
		throw err;
	});
}

module.exports = getAllCategories;
