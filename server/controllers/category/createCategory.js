const { create } = require('../../repositories/category');

const createCategoryCtl = (req, res) => {
	const { name, shortname } = req.body;
	create(name, shortname)
	.then(category => {
		res.json({
			category
		});
	})
	.catch(err => {
		throw err;
	});
}

module.exports = createCategoryCtl;
