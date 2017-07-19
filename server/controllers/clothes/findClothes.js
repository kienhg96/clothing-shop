const { findClothesById } = require('../../repositories/clothes');

const findClothes = (req, res) => {
	const { id } = req.query;
	findClothesById(id)
	.then(clothes => {
		return res.json({ clothes });
	})
	.catch(err => {
		throw err;
	});
}

module.exports = findClothes
