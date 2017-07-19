const Category = require('../../models/Category');

const getAll = () =>
new Promise((resolve, reject) => {
	Category.find({})
	.select('name shortname')
	.exec((err, categories) => {
		if (err) {
			return reject(err);
		}
		return resolve(categories);
	});
});

module.exports = getAll;
