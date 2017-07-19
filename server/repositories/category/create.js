const Category = require('../../models/Category');

const create = (name, shortname) => 
new Promise((resolve, reject) => {
	const category = new Category({
		name,
		shortname
	});
	category.save(err => {
		if (err) {
			return reject(err);
		}
		return resolve(category);
	})
});

module.exports = create;
