const Clothes = require('../../models/Clothes');

const getClothesById = id => 
new Promise((resolve, reject) => {
	Clothes.findById(id)
	.select("name producer price size color thumb images category")
	.populate("category")
	.exec((err, clothes) => {
		if (err) {
			return reject(err);
		}
		return resolve(clothes);
	});
});

module.exports = getClothesById;
