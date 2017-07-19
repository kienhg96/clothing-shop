const { 
	findByShortname
} = require('../../repositories/category');

const findCategory = (req, res) => {
	const { shortname } = req.query;
	findByShortname(shortname)
	.then(category => {
		res.json({ category });
	})
	.catch(err => {
		throw err;
	})
}

module.exports = findCategory;
