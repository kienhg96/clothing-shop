const Category = require('../../models/Category');

const findByShortname = shortname =>
new Promise((resolve, reject) => {
	Category.findOne({ shortname })
	.populate('clothesList')
	.select('name shortname clothesList')
	.exec((err, category) => {
		if (err) {
			return reject(err);
		}
		return resolve(category);
	});
});

module.exports = findByShortname;
